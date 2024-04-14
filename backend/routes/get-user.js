const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/user/:userId', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select(
          't0.user_id as userId',
          't0.username as username',
          't0.avatar as avatar',
          't0.first_name as firstName',
          't0.last_name as lastName',
          't0.email as email',
          't0.enabled as enabled',
          't1.name as teamName',
          't0.last_interaction_datetime as lastInteractionDatetime',
          't0.team_id as teamId'
        )
        .from('users as t0')
        .leftJoin('teams as t1', 't1.team_id', '=', 't0.team_id');
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t0.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
      }
      else {
        knexQuery = knexQuery.where(knex.raw('1 = 0'));
      }
      knexQuery = knexQuery.where('t0.user_id', '=', req.params['userId']);
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
            description: 'The requested User could not be found.',
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
