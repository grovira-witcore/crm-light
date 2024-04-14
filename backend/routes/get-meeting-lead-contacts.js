const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/meeting-lead-contacts', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.meeting_lead_contact_id as meetingLeadContactId',
          't1.first_name as leadContactFirstName',
          't1.last_name as leadContactLastName',
          't1.avatar as leadContactAvatar'
        )
        .from('meeting_lead_contacts as t0')
        .innerJoin('lead_contacts as t1', 't1.lead_contact_id', '=', 't0.lead_contact_id');
      if (req.query['meetingMeetingId'] !== null && req.query['meetingMeetingId'] !== undefined) {
        knexQuery = knexQuery.where('t0.meeting_id', '=', knex.raw('?', parseInt(req.query['meetingMeetingId'])));
      }
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
