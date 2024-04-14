const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.post('/user-role', async function (req, res) {
    try {
      const data = req.body;
      const id = await knex('users_roles')
        .insert({
          user_id: data.userId,
          role: data.role,
        });
      const user = (await knex.select('username').from('users').where('user_id', '=', data.userId))[0];
      await Security.syncUser(knex, user.username);
      res.send(id);
    }
    catch (err) {
      if (Utils.isUniqueKeyError(err)) {
        res
          .status(409)
          .send({
            code: 409,
            message: 'Conflict',
            description: 'Unique key constraint fails trying to insert UserRole.',
            translationKey: 'cannotCreateThisObjectBecauseItAlreadyExists'
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
