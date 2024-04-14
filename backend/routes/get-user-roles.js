const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/user-roles', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.user_role_id as userRoleId',
          't0.role as role'
        )
        .from('users_roles as t0');
      if (req.query['userUserId'] !== null && req.query['userUserId'] !== undefined) {
        knexQuery = knexQuery.where('t0.user_id', '=', knex.raw('?', parseInt(req.query['userUserId'])));
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
