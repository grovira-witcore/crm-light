const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/lead-contact/:leadContactId', async function (req, res) {
    try {
      let knexQuery = knex
        .select(
          't0.lead_contact_id as leadContactId',
          't0.first_name as firstName',
          't0.last_name as lastName',
          't0.phone_number as phoneNumber',
          't0.email as email',
          't0.position_id as positionId'
        )
        .from('lead_contacts as t0');
      knexQuery = knexQuery.where('t0.lead_contact_id', '=', req.params['leadContactId']);
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
            description: 'The requested LeadContact could not be found.',
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
