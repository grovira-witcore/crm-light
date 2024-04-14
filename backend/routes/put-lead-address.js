const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.put('/lead-address/:leadAddressId', async function (req, res) {
    try {
      let data = req.body;
      let updateData = {};
      if (data.street !== undefined) {
        updateData.street = data.street;
      }
      if (data.city !== undefined) {
        updateData.city = data.city;
      }
      if (data.state !== undefined) {
        updateData.state = data.state;
      }
      if (data.zipCode !== undefined) {
        updateData.zip_code = data.zipCode;
      }
      if (data.countryId !== undefined) {
        updateData.country_id = data.countryId;
      }
      await knex('lead_addresses')
        .where('lead_address_id', '=', req.params['leadAddressId'])
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
