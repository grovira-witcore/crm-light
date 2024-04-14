const Knex = require('knex');
const Express = require('express');
const Fs = require('fs');
const CreateTables = require('./create-tables.js');
const CreateMockData = require('./create-mock-data.js');
const Security = require('./security/security.js');

const PORT = process.env.PORT || 4000;

(async function () {
  // Knex
  const knex = Knex({
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true
  });
  await CreateTables(knex);
  await CreateMockData(knex);
  // Express
  const express = Express();
  express.use(Express.json());
  // Security
  await Security.init(knex, express, ['administrator', 'seller']);
  // Routes
  const filesNames = await Fs.promises.readdir('./routes');
  filesNames.forEach(fileName => {
    require('./routes/' + fileName)(knex, express);
  });
  // Start
  express.listen(PORT, () => {
    console.log('Listening');
  });
})();
