const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/task/:taskId', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select(
          't0.task_id as taskId',
          't0.status as status'
        )
        .from('tasks as t0')
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
      knexQuery = knexQuery.where('t0.task_id', '=', req.params['taskId']);
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
            description: 'The requested Task could not be found.',
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
