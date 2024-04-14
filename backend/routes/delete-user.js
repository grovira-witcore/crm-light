const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.delete('/user/:userId', async function (req, res) {
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
      const user = (await knex.select('username').from('users').where('user_id', '=', req.params['userId']))[0];
      if (req.username === user.username) {
        res
          .status(409)
          .send({
            code: 409,
            message: 'Conflict',
            description: 'You cannot delete your own user account.',
            translationKey: 'youCannotDeleteYourOwnUserAccount'
          });
        return;
      }
      await knex.transaction(async trx => {
        await trx('users_roles')
          .where('user_id', '=', req.params['userId'])
          .delete();
        await trx('users')
          .where('user_id', '=', req.params['userId'])
          .delete();
        await trx.commit();
      });
      await Security.syncUser(knex, user.username);
      res.send(null);
    }
    catch (err) {
      if (Utils.isForeignKeyError(err)) {
        res
          .status(409)
          .send({
            code: 409,
            message: 'Conflict',
            description: 'Foreign key constraint fails trying to delete User.',
            translationKey: 'cannotDeleteThisObjectBecauseItHasRelations'
          });
        return;
      }
      else {
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
    }
  });
}
