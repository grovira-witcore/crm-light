const Security = require('../security/security.js');
const Utils = require('../utils.js');

module.exports = function (knex, express) {
  express.get('/tasks', async function (req, res) {
    try {
      const roles = await Security.getRoles(req);
      let knexQuery = knex
        .select(
          't0.task_id as taskId',
          't0.start_date as startDate',
          't0.due_date as dueDate',
          't1.first_name as userFirstName',
          't1.last_name as userLastName',
          't1.avatar as userAvatar',
          't2.name as leadName',
          't2.avatar as leadAvatar',
          't0.subject as subject',
          't0.remarks as remarks'
        )
        .from('tasks as t0')
        .innerJoin('users as t1', 't1.user_id', '=', 't0.user_id')
        .innerJoin('leads as t2', 't2.lead_id', '=', 't0.lead_id');
      knexQuery = knexQuery.where('t0.status', '=', 'pending');
      if (roles.includes('administrator')) {
        // No Security Filter
      }
      else if (roles.includes('seller')) {
        knexQuery = knexQuery.where('t2.team_id', '=', knex.raw('?', (await knex('users').select('team_id').where('username', '=', req.username).first())['team_id']));
      }
      else {
        knexQuery = knexQuery.where(knex.raw('1 = 0'));
      }
      knexQuery = knexQuery.orderBy([
        { column: 't0.start_date', order: 'asc' },
        { column: 't0.due_date', order: 'asc' },
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
