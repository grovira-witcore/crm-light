const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.post('/lead-contact', async function (req, res) {
    try {
      const data = req.body;
      const id = await knex('lead_contacts')
        .insert({
          lead_id: data.leadId,
          first_name: data.firstName,
          last_name: data.lastName,
          phone_number: data.phoneNumber,
          email: data.email,
          position_id: data.positionId,
        });
      res.send(id);
    }
    catch (err) {
      if (Utils.isUniqueKeyError(err)) {
        res
          .status(409)
          .send({
            code: 409,
            message: 'Conflict',
            description: 'Unique key constraint fails trying to insert LeadContact.',
            translationKey: 'cannotCreateThisObjectBecauseItAlreadyExists'
          });
        return;
      }
      else {
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
    }
  });
}
