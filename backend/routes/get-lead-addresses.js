const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/lead-addresses', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.lead_address_id as leadAddressId',
          't0.street as street',
          't0.city as city',
          't0.state as state',
          't0.zip_code as zipCode',
          't1.name as countryName'
        )
        .from('lead_addresses as t0')
        .innerJoin('countries as t1', 't1.country_id', '=', 't0.country_id');
      if (req.query['leadLeadId'] !== null && req.query['leadLeadId'] !== undefined) {
        knexQuery = knexQuery.where('t0.lead_id', '=', knex.raw('?', parseInt(req.query['leadLeadId'])));
      }
      knexQuery = knexQuery.orderBy([
        { column: 't0.street', order: 'asc' },
      ]);
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
