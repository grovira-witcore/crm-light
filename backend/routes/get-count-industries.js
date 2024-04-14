const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/count-industries', async function (req, res) {
    try {
      let knexQuery = knex
        .count('* as count')
        .from('industries as t0');
      const result = await knexQuery;
      res.send(JSON.stringify(result[0].count));
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
