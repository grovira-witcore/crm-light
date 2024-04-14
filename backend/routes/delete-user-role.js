const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.delete('/user-role/:userRoleId', async function (req, res) {
    try {
      const userRole = (await knex.select('user_id as userId').from('users_roles').where('user_role_id', '=', req.params['userRoleId']))[0];
      const user = (await knex.select('username').from('users').where('user_id', '=', userRole.userId))[0];
      if (req.username === user.username) {
        res
          .status(409)
          .send({
            code: 409,
            message: 'Conflict',
            description: 'You cannot delete roles to your own user account.',
            translationKey: 'youCannotDeleteRolesToYourOwnUserAccount'
          });
        return;
      }
      await knex('users_roles')
        .where('user_role_id', '=', req.params['userRoleId'])
        .delete();
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
            description: 'Foreign key constraint fails trying to delete UserRole.',
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
