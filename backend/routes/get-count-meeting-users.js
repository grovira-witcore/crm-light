const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/count-meeting-users', async function (req, res) {
    try {
      let knexQuery = knex
        .count('* as count')
        .from('meeting_users as t0');
      if (req.query['meetingMeetingId'] !== null && req.query['meetingMeetingId'] !== undefined) {
        knexQuery = knexQuery.where('t0.meeting_id', '=', knex.raw('?', parseInt(req.query['meetingMeetingId'])));
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
