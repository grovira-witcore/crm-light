const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/lead-address/:leadAddressId', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.lead_address_id as leadAddressId',
          't0.street as street',
          't0.city as city',
          't0.state as state',
          't0.zip_code as zipCode',
          't0.country_id as countryId',
          't1.name as countryName'
        )
        .from('lead_addresses as t0')
        .innerJoin('countries as t1', 't1.country_id', '=', 't0.country_id');
      knexQuery = knexQuery.where('t0.lead_address_id', '=', req.params['leadAddressId']);
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
            description: 'The requested LeadAddress could not be found.',
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
