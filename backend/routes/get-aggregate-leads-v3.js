const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/aggregate-leads/v3', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select(
          't0.team_id as teamId',
          't1.name as teamName'
        )
        .count('* as countOfRecords')
        .from('leads as t0')
        .innerJoin('teams as t1', 't1.team_id', '=', 't0.team_id')
        .groupBy(
        't0.team_id',
        't1.name'
        );
      knexQuery = knexQuery.where(function () { return this.where('t0.status', '=', 'new').orWhere('t0.status', '=', 'inProgress'); });
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t0.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
      }
      else {
        knexQuery = knexQuery.where(knex.raw('1 = 0'));
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
