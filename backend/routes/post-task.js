const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.post('/task', async function (req, res) {
    try {
      const data = req.body;
      const id = await knex('tasks')
        .insert({
          lead_id: data.leadId,
          start_date: data.startDate ? new Date(data.startDate) : null,
          due_date: data.dueDate ? new Date(data.dueDate) : null,
          user_id: data.userId,
          subject: data.subject,
          remarks: data.remarks,
          status: data.status,
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
            description: 'Unique key constraint fails trying to insert Task.',
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
