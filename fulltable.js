const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    password: 'marimeli',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
})

//Connecting to the postgres database and executing queries (promises)
client.connect() 
    .then(() => console.log('Connected succesfully'))
    .then(()=> client.query('insert into employees values ($1, $2)', [5, 'meli'])) //Executing queries with parameters (promises) && Executing Insert statement (DML) (Promises)
    .then(()=> client.query('select * from employees')) 
    .then(results => console.table(results.rows)) // returns a nice table with the data
    .catch(e => console.log(e))
    .finally(() => client.end())