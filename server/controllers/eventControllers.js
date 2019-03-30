const { Client } = require('pg');

const client = new Client({
  user: 'tolgagrouse',
  host: 'localhost',
  database: 'jest'
});

client.connect(err => {
  if (err) console.log(err);
  else console.log('Client connected to the database.');
});

module.exports = client;