const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/lead-contacts', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.lead_contact_id as leadContactId',
          't0.first_name as firstName',
          't0.last_name as lastName',
          't1.name as positionName',
          't0.avatar as avatar',
          't0.phone_number as phoneNumber',
          't0.email as email'
        )
        .from('lead_contacts as t0')
        .innerJoin('positions as t1', 't1.position_id', '=', 't0.position_id');
      if (req.query['leadLeadId'] !== null && req.query['leadLeadId'] !== undefined) {
        knexQuery = knexQuery.where('t0.lead_id', '=', knex.raw('?', parseInt(req.query['leadLeadId'])));
      }
      if (req.query['meetingLeadId'] !== null && req.query['meetingLeadId'] !== undefined) {
        knexQuery = knexQuery.where('t0.lead_id', '=', knex.raw('?', parseInt(req.query['meetingLeadId'])));
      }
      knexQuery = knexQuery.orderBy([
        { column: 't0.first_name', order: 'asc' },
        { column: 't0.last_name', order: 'asc' },
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
