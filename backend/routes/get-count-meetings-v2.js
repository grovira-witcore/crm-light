const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/count-meetings/v2', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .count('* as count')
        .from('meetings as t0')
        .innerJoin('leads as t1', 't1.lead_id', '=', 't0.lead_id');
      if (req.query['leadLeadId'] !== null && req.query['leadLeadId'] !== undefined) {
        knexQuery = knexQuery.where('t0.lead_id', '=', knex.raw('?', parseInt(req.query['leadLeadId'])));
      }
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t1.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
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
