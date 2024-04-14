const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/users/v2', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select(
          't0.user_id as userId',
          't0.first_name as firstName',
          't0.last_name as lastName',
          't0.username as username',
          't0.avatar as avatar',
          't0.email as email',
          't1.name as teamName',
          't0.enabled as enabled'
        )
        .from('users as t0')
        .leftJoin('teams as t1', 't1.team_id', '=', 't0.team_id');
      if (req.query['username'] !== null && req.query['username'] !== undefined) {
        knexQuery = knexQuery.where(function () { return this.whereLike('t0.username', knex.raw('?', req.query['username'])); });
      }
      if (req.query['enabled'] !== null && req.query['enabled'] !== undefined) {
        knexQuery = knexQuery.where('t0.enabled', '=', (req.query['enabled'] === 'true' ? 1 : 0));
      }
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t0.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
      }
      else {
        knexQuery = knexQuery.where(knex.raw('1 = 0'));
      }
      knexQuery = knexQuery.orderBy([
        { column: 't0.username', order: 'asc' },
      ]);
      if (req.query['offset']) {
        knexQuery = knexQuery.offset(parseInt(req.query['offset']));
      }
      if (req.query['limit']) {
        knexQuery = knexQuery.limit(parseInt(req.query['limit']));
      }
      const instances = await knexQuery;
      res.send(JSON.stringify(instances));
    }
    catch (err) {
      res
        .status(500)
        .send({
          code: 500,
          message: 'Internal Server Error',
          description: 'Something went wrong',
          translationKey: 'somethingWentWrong'
        });
      console.log(err);
    }
  });
}
