const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/meetings/v2', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select(
          't0.meeting_id as meetingId',
          't0.datetime as datetime',
          't0.subject as subject',
          't0.remarks as remarks',
          't0.status as status'
        )
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
      knexQuery = knexQuery.orderBy([
        { column: 't0.datetime', order: 'asc' },
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
