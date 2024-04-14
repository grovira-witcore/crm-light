const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/count-users', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .count('* as count')
        .from('users as t0');
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
      const result = await knexQuery;
      res.send(JSON.stringify(result[0].count));
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
