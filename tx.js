const {
  Client
} = require('pg');
const client = new Client({
  user: 'postgres',
  password: 'marimeli',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
})

async function execute() {
  try {
    await client.connect();
    await client.query('BEGIN');
    await client.query('insert into employees values ($1,$2)', [8, 'mari'])
    console.log('Inserted a new row');
    await client.query('COMMIT');
  }  catch (e) {
    console.log(`Something wrong happened ${e}`);
    await client.query('ROLLBACK');
  }  finally {
    await client.end();
    console.log('Client disconnected succesfully');
  }
}

execute();