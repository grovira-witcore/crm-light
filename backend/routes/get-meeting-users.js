const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/meeting-users', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.meeting_user_id as meetingUserId',
          't1.first_name as userFirstName',
          't1.last_name as userLastName',
          't1.avatar as userAvatar'
        )
        .from('meeting_users as t0')
        .innerJoin('users as t1', 't1.user_id', '=', 't0.user_id');
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
