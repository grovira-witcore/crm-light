const Security = require('../security/security.js');
const Utils = require('../utils.js');
const createLead = async function (knex, req, res) {
    const { name, industryId, size, linkedin, probability } = req.body;
    
    const user = await knex('users')
        .select('user_id', 'team_id')
        .where('username', '=', req.username)
        .first();
    
    const leadId = await knex('leads')
        .insert({
            avatar: null,
            name: name,
            industry_id: industryId,
            size: size,
            status: 'new',
            probability: probability,
            team_id: user.team_id,
            user_id: user.user_id,
            linkedin: linkedin,
            last_interaction_datetime: null
        })
        .returning('lead_id');
    
    res.status(200).send({ leadId: leadId[0] });
}
module.exports = function (knex, express) {
  express.post('/lead', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      if (!(roles.includes('seller'))) {
        res
          .status(403)
          .send({
            code: 403,
            message: 'Forbidden',
            description: 'You don\'t have permission to execute operation CreateLead.',
            translationKey: 'youDoNotHavePermissionToAccessThisObject'
          });
        return;
        return;
      }
      await createLead(knex, req, res);
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
