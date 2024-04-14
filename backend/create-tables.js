module.exports = async function (knex) {
  await knex.raw('PRAGMA foreign_keys = ON')
  // Tables
  await knex.schema.createTable('countries', function (knexTable) {
    knexTable.increments('country_id');
    knexTable.string('name', 80);
  });
  await knex.schema.createTable('industries', function (knexTable) {
    knexTable.increments('industry_id');
    knexTable.string('name', 80);
  });
  await knex.schema.createTable('interactions', function (knexTable) {
    knexTable.increments('interaction_id');
    knexTable.datetime('datetime');
    knexTable.integer('user_id');
    knexTable.integer('lead_id');
    knexTable.integer('lead_contact_id');
    knexTable.string('type', 80);
    knexTable.string('subject', 200);
    knexTable.string('remarks', 400);
    knexTable.decimal('probability_change');
  });
  await knex.schema.createTable('leads', function (knexTable) {
    knexTable.increments('lead_id');
    knexTable.string('avatar', 400).nullable();
    knexTable.string('name', 80);
    knexTable.integer('industry_id');
    knexTable.string('size', 40);
    knexTable.string('status', 40);
    knexTable.decimal('probability');
    knexTable.integer('team_id');
    knexTable.integer('user_id');
    knexTable.string('linkedin', 400).nullable();
    knexTable.datetime('last_interaction_datetime').nullable();
  });
  await knex.schema.createTable('lead_addresses', function (knexTable) {
    knexTable.increments('lead_address_id');
    knexTable.integer('lead_id');
    knexTable.string('street', 100);
    knexTable.string('city', 50);
    knexTable.string('state', 50);
    knexTable.string('zip_code', 20);
    knexTable.integer('country_id');
  });
  await knex.schema.createTable('lead_contacts', function (knexTable) {
    knexTable.increments('lead_contact_id');
    knexTable.integer('lead_id');
    knexTable.string('avatar', 400).nullable();
    knexTable.string('first_name', 80);
    knexTable.string('last_name', 80);
    knexTable.string('phone_number', 20);
    knexTable.string('email', 80);
    knexTable.integer('position_id');
  });
  await knex.schema.createTable('meetings', function (knexTable) {
    knexTable.increments('meeting_id');
    knexTable.integer('lead_id');
    knexTable.datetime('datetime');
    knexTable.string('subject', 100);
    knexTable.string('remarks', 500);
    knexTable.string('status', 80);
  });
  await knex.schema.createTable('meeting_lead_contacts', function (knexTable) {
    knexTable.increments('meeting_lead_contact_id');
    knexTable.integer('meeting_id');
    knexTable.integer('lead_contact_id');
  });
  await knex.schema.createTable('meeting_users', function (knexTable) {
    knexTable.increments('meeting_user_id');
    knexTable.integer('meeting_id');
    knexTable.integer('user_id');
  });
  await knex.schema.createTable('notes', function (knexTable) {
    knexTable.increments('note_id');
    knexTable.datetime('datetime');
    knexTable.integer('user_id');
    knexTable.integer('lead_id');
    knexTable.string('subject', 200);
    knexTable.string('remarks', 400);
  });
  await knex.schema.createTable('positions', function (knexTable) {
    knexTable.increments('position_id');
    knexTable.string('name', 80);
  });
  await knex.schema.createTable('tasks', function (knexTable) {
    knexTable.increments('task_id');
    knexTable.integer('user_id');
    knexTable.integer('lead_id');
    knexTable.date('start_date');
    knexTable.date('due_date');
    knexTable.string('subject', 100);
    knexTable.string('remarks', 500).nullable();
    knexTable.string('status', 80);
  });
  await knex.schema.createTable('teams', function (knexTable) {
    knexTable.increments('team_id');
    knexTable.string('name', 80);
  });
  await knex.schema.createTable('users', function (knexTable) {
    knexTable.increments('user_id');
    knexTable.string('username', 80);
    knexTable.string('first_name', 80).nullable();
    knexTable.string('last_name', 80).nullable();
    knexTable.string('email', 120).nullable();
    knexTable.string('avatar', 400).nullable();
    knexTable.boolean('enabled');
    knexTable.integer('team_id').nullable();
    knexTable.datetime('last_interaction_datetime').nullable();
  });
  await knex.schema.createTable('users_roles', function (knexTable) {
    knexTable.increments('user_role_id');
    knexTable.integer('user_id');
    knexTable.string('role', 80);
  });
  // Foreign Keys
  await knex.schema.table('interactions', function (knexTable) {
    knexTable.foreign('user_id').references('users.user_id');
    knexTable.foreign('lead_id').references('leads.lead_id');
    knexTable.foreign('lead_contact_id').references('lead_contacts.lead_contact_id');
  });
  await knex.schema.table('leads', function (knexTable) {
    knexTable.foreign('industry_id').references('industries.industry_id');
    knexTable.foreign('team_id').references('teams.team_id');
    knexTable.foreign('user_id').references('users.user_id');
  });
  await knex.schema.table('lead_addresses', function (knexTable) {
    knexTable.foreign('lead_id').references('leads.lead_id');
    knexTable.foreign('country_id').references('countries.country_id');
  });
  await knex.schema.table('lead_contacts', function (knexTable) {
    knexTable.foreign('lead_id').references('leads.lead_id');
    knexTable.foreign('position_id').references('positions.position_id');
  });
  await knex.schema.table('meetings', function (knexTable) {
    knexTable.foreign('lead_id').references('leads.lead_id');
  });
  await knex.schema.table('meeting_lead_contacts', function (knexTable) {
    knexTable.foreign('meeting_id').references('meetings.meeting_id');
    knexTable.foreign('lead_contact_id').references('lead_contacts.lead_contact_id');
  });
  await knex.schema.table('meeting_users', function (knexTable) {
    knexTable.foreign('meeting_id').references('meetings.meeting_id');
    knexTable.foreign('user_id').references('users.user_id');
  });
  await knex.schema.table('notes', function (knexTable) {
    knexTable.foreign('user_id').references('users.user_id');
    knexTable.foreign('lead_id').references('leads.lead_id');
  });
  await knex.schema.table('tasks', function (knexTable) {
    knexTable.foreign('user_id').references('users.user_id');
    knexTable.foreign('lead_id').references('leads.lead_id');
  });
  await knex.schema.table('users', function (knexTable) {
    knexTable.foreign('team_id').references('teams.team_id');
  });
  await knex.schema.table('users_roles', function (knexTable) {
    knexTable.foreign('user_id').references('users.user_id');
  });
  // Unique Keys
  // Indexes
}
