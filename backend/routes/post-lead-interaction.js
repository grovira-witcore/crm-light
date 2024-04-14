const Security = require('../security/security.js');
const Utils = require('../utils.js');
const createInteraction = async function (knex, req, res) {
  const { leadContactId, type, subject, remarks, newProbability } = req.body;
  const leadId = parseInt(req.params.leadId);
  const now = new Date();

  // Get the user data
  const user = await knex('users')
    .select('user_id as userId', 'last_interaction_datetime as lastInteractionDatetime')
    .where('username', '=', req.username)
    .first();

  // Get the lead data
  const lead = await knex('leads')
    .select('probability as probability', 'status as status')
    .where('lead_id', '=', leadId)
    .first();

  let status = 'inProgress';
  if (newProbability === 0) {
    status = 'lost';
  } else if (newProbability === 1) {
    status = 'won';
  }
  const probabilityChange = newProbability ? newProbability - lead.probability : null;

  knex.transaction(async (trx) => {
    // Create interaction
    const interaction = await trx('interactions')
      .insert({
        datetime: now,
        user_id: user.userId,
        lead_id: leadId,
        lead_contact_id: leadContactId,
        type: type,
        subject: subject,
        remarks: remarks,
        probability_change: probabilityChange
      })
      .returning('interaction_id as interactionId');

    // Update lead
    await trx('leads')
      .update({
        status: status,
        probability: newProbability,
        last_interaction_datetime: now
      })
      .where('lead_id', '=', leadId);

    // Update user
    await trx('users')
      .update({
        last_interaction_datetime: now
      })
      .where('user_id', '=', user.userId);

    // Send response
    res.status(200).send({
      interactionId: interaction[0],
      leadStatus: status
    });
  });
}
module.exports = function (knex, express) {
  express.post('/lead/:leadId/interaction', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      if (!(roles.includes('seller'))) {
        res
          .status(403)
          .send({
            code: 403,
            message: 'Forbidden',
            description: 'You don\'t have permission to execute operation CreateInteraction.',
            translationKey: 'youDoNotHavePermissionToAccessThisObject'
          });
        return;
        return;
      }
      await createInteraction(knex, req, res);
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
