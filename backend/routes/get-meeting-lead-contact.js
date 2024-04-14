const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/meeting-lead-contact/:meetingLeadContactId', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.meeting_lead_contact_id as meetingLeadContactId',
          't1.first_name as leadContactFirstName',
          't1.last_name as leadContactLastName'
        )
        .from('meeting_lead_contacts as t0')
        .innerJoin('lead_contacts as t1', 't1.lead_contact_id', '=', 't0.lead_contact_id');
      knexQuery = knexQuery.where('t0.meeting_lead_contact_id', '=', req.params['meetingLeadContactId']);
      const instances = await knexQuery;
      if (instances.length > 0) {
        res.send(instances[0]);
      }
      else {
        res
          .status(404)
          .send({
            code: 404,
            message: 'Not Found',
            description: 'The requested MeetingLeadContact could not be found.',
            translationKey: 'theRequestedResourceCouldNotBeFound'
          });
        return;
      }
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
