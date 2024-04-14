const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.post('/user', async function (req, res) {
    try {
      const data = req.body;
      const id = await knex('users')
        .insert({
          username: data.username,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          team_id: data.teamId,
          enabled: data.enabled,
        });
      await Security.syncUser(knex, data.username);
      res.send(id);
    }
    catch (err) {
      if (Utils.isUniqueKeyError(err)) {
        res
          .status(409)
          .send({
            code: 409,
            message: 'Conflict',
            description: 'Unique key constraint fails trying to insert User.',
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
