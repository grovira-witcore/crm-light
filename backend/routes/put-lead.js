const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.put('/lead/:leadId', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select('lead_id')
        .from('leads as t0');
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t0.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
      }
      else {
        knexQuery = knexQuery.where(knex.raw('1 = 0'));
      }
      knexQuery = knexQuery.where('lead_id', '=', req.params['leadId']);
      const instances = await knexQuery;
      if (instances.length === 0) {
        res
          .status(404)
          .send({
            code: 404,
            message: 'Not Found',
            description: 'The requested Lead could not be found.',
            translationKey: 'theRequestedResourceCouldNotBeFound'
          });
        return;
        return;
      }
      let data = req.body;
      let updateData = {};
      if (data.name !== undefined) {
        updateData.name = data.name;
      }
      if (data.industryId !== undefined) {
        updateData.industry_id = data.industryId;
      }
      if (data.size !== undefined) {
        updateData.size = data.size;
      }
      if (data.linkedin !== undefined) {
        updateData.linkedin = data.linkedin;
      }
      await knex('leads')
        .where('lead_id', '=', req.params['leadId'])
        .update(updateData);
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
