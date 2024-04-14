const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/country/:countryId', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.country_id as countryId',
          't0.name as name'
        )
        .from('countries as t0');
      knexQuery = knexQuery.where('t0.country_id', '=', req.params['countryId']);
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
            description: 'The requested Country could not be found.',
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
