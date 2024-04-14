const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.put('/user/:userId', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select('user_id')
        .from('users as t0');
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t0.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
      }
      else {
        knexQuery = knexQuery.where(knex.raw('1 = 0'));
      }
      knexQuery = knexQuery.where('user_id', '=', req.params['userId']);
      const instances = await knexQuery;
      if (instances.length === 0) {
        res
          .status(404)
          .send({
            code: 404,
            message: 'Not Found',
            description: 'The requested User could not be found.',
            translationKey: 'theRequestedResourceCouldNotBeFound'
          });
        return;
        return;
      }
      let data = req.body;
      let updateData = {};
      if (data.username !== undefined) {
        updateData.username = data.username;
      }
      if (data.firstName !== undefined) {
        updateData.first_name = data.firstName;
      }
      if (data.lastName !== undefined) {
        updateData.last_name = data.lastName;
      }
      if (data.email !== undefined) {
        updateData.email = data.email;
      }
      if (data.teamId !== undefined) {
        updateData.team_id = data.teamId;
      }
      if (data.enabled !== undefined) {
        updateData.enabled = data.enabled;
      }
      await knex('users')
        .where('user_id', '=', req.params['userId'])
        .update(updateData);
      const user = (await knex.select('username').from('users').where('user_id', '=', req.params['userId']))[0];
      await Security.syncUser(knex, user.username);
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
