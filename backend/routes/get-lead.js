const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/lead/:leadId', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select(
          't0.lead_id as leadId',
          't0.name as name',
          't0.linkedin as linkedin',
          't0.avatar as avatar',
          't1.name as industryName',
          't0.size as size',
          't2.first_name as userFirstName',
          't2.last_name as userLastName',
          't2.avatar as userAvatar',
          't0.probability as probability',
          't0.status as status',
          't0.last_interaction_datetime as lastInteractionDatetime',
          't0.industry_id as industryId'
        )
        .from('leads as t0')
        .innerJoin('industries as t1', 't1.industry_id', '=', 't0.industry_id')
        .innerJoin('users as t2', 't2.user_id', '=', 't0.user_id');
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t0.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
      }
      else {
        knexQuery = knexQuery.where(knex.raw('1 = 0'));
      }
      knexQuery = knexQuery.where('t0.lead_id', '=', req.params['leadId']);
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
            description: 'The requested Lead could not be found.',
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
