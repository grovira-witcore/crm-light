const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/leads', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select(
          't0.lead_id as leadId',
          't0.name as name',
          't0.avatar as avatar',
          't1.name as industryName',
          't0.size as size',
          't2.first_name as userFirstName',
          't2.last_name as userLastName',
          't2.avatar as userAvatar',
          't0.probability as probability',
          't0.status as status',
          't0.last_interaction_datetime as lastInteractionDatetime'
        )
        .from('leads as t0')
        .innerJoin('industries as t1', 't1.industry_id', '=', 't0.industry_id')
        .innerJoin('users as t2', 't2.user_id', '=', 't0.user_id');
      if (req.query['industryIds'] !== null && req.query['industryIds'] !== undefined) {
        knexQuery = knexQuery.where(function () { return this.whereIn('t0.industry_id', req.query['industryIds'].split(',').map((value) => parseInt(value))); });
      }
      if (req.query['sizes'] !== null && req.query['sizes'] !== undefined) {
        knexQuery = knexQuery.where(function () { return this.whereIn('t0.size', req.query['sizes'].split(',')); });
      }
      if (req.query['statuss'] !== null && req.query['statuss'] !== undefined) {
        knexQuery = knexQuery.where(function () { return this.whereIn('t0.status', req.query['statuss'].split(',')); });
      }
      if (req.query['userIds'] !== null && req.query['userIds'] !== undefined) {
        knexQuery = knexQuery.where(function () { return this.whereIn('t0.user_id', req.query['userIds'].split(',').map((value) => parseInt(value))); });
      }
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t0.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
      }
      else {
        knexQuery = knexQuery.where(knex.raw('1 = 0'));
      }
      knexQuery = knexQuery.orderBy([
        { column: 't0.name', order: 'asc' },
      ]);
      if (req.query['offset']) {
        knexQuery = knexQuery.offset(parseInt(req.query['offset']));
      }
      if (req.query['limit']) {
        knexQuery = knexQuery.limit(parseInt(req.query['limit']));
      }
      const instances = await knexQuery;
      res.send(JSON.stringify(instances));
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
