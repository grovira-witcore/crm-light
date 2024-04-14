const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.put('/country/:countryId', async function (req, res) {
    try {
      let data = req.body;
      let updateData = {};
      if (data.name !== undefined) {
        updateData.name = data.name;
      }
      await knex('countries')
        .where('country_id', '=', req.params['countryId'])
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
