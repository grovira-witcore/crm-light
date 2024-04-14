const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/meeting-user/:meetingUserId', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.meeting_user_id as meetingUserId',
          't1.first_name as userFirstName',
          't1.last_name as userLastName'
        )
        .from('meeting_users as t0')
        .innerJoin('users as t1', 't1.user_id', '=', 't0.user_id');
      knexQuery = knexQuery.where('t0.meeting_user_id', '=', req.params['meetingUserId']);
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
            description: 'The requested MeetingUser could not be found.',
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
