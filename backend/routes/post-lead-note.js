const Security = require('../security/security.js');
const Utils = require('../utils.js');
const createNote = async function (knex, req, res) {
  const leadId = parseInt(req.params.leadId);
  const { subject, remarks } = req.body;

  const user = await knex('users')
    .select('user_id')
    .where('username', '=', req.username)
    .first();

  const [noteId] = await knex('notes')
    .insert({
      datetime: new Date(),
      user_id: user.user_id,
      lead_id: leadId,
      subject: subject,
      remarks: remarks,
    })
    .returning('note_id');

  res.status(200).send({ noteId });
}
module.exports = function (knex, express) {
  express.post('/lead/:leadId/note', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      if (!(roles.includes('seller'))) {
        res
          .status(403)
          .send({
            code: 403,
            message: 'Forbidden',
            description: 'You don\'t have permission to execute operation CreateNote.',
            translationKey: 'youDoNotHavePermissionToAccessThisObject'
          });
        return;
        return;
      }
      await createNote(knex, req, res);
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
