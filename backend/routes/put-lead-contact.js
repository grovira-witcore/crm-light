const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.put('/lead-contact/:leadContactId', async function (req, res) {
    try {
      let data = req.body;
      let updateData = {};
      if (data.firstName !== undefined) {
        updateData.first_name = data.firstName;
      }
      if (data.lastName !== undefined) {
        updateData.last_name = data.lastName;
      }
      if (data.phoneNumber !== undefined) {
        updateData.phone_number = data.phoneNumber;
      }
      if (data.email !== undefined) {
        updateData.email = data.email;
      }
      if (data.positionId !== undefined) {
        updateData.position_id = data.positionId;
      }
      await knex('lead_contacts')
        .where('lead_contact_id', '=', req.params['leadContactId'])
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
