const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.put('/meeting/:meetingId', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select('meeting_id')
        .from('meetings as t0')
        .innerJoin('leads as t1', 't1.lead_id', '=', 't0.lead_id');
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t1.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
      }
      else {
        knexQuery = knexQuery.where(knex.raw('1 = 0'));
      }
      knexQuery = knexQuery.where('meeting_id', '=', req.params['meetingId']);
      const instances = await knexQuery;
      if (instances.length === 0) {
        res
          .status(404)
          .send({
            code: 404,
            message: 'Not Found',
            description: 'The requested Meeting could not be found.',
            translationKey: 'theRequestedResourceCouldNotBeFound'
          });
        return;
        return;
      }
      let data = req.body;
      let updateData = {};
      if (data.status !== undefined) {
        updateData.status = data.status;
      }
      await knex('meetings')
        .where('meeting_id', '=', req.params['meetingId'])
        .update(updateData);
      res.send(null);
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
