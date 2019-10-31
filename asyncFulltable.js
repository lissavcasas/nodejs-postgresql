const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  password: 'marimeli',
  host: 'localhost',
  port: 5432,
  database: 'postgres'
})

execute();

async function execute() {
  try {
    await client.connect()
    console.log('Connected succesfully');
    await client.query('insert into employees values ($1, $2)', [7, 'mey'])

    const { rows } = await client.query('select * from employees')
    console.table(rows);
    await client.end()
    console.log('Client disconnected succesfully');
  }
  catch (e) {
    console.log(`Something wrong happened ${e}`)
  }
 /*  finally {
    await client.end()
    console.log('Client disconnected succesfully');
  } */
}

