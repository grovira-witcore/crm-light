const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/user-role/:userRoleId', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.user_role_id as userRoleId',
          't0.role as role'
        )
        .from('users_roles as t0');
      knexQuery = knexQuery.where('t0.user_role_id', '=', req.params['userRoleId']);
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
            description: 'The requested UserRole could not be found.',
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
