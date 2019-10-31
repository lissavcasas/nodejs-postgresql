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
    .then(() => console.log('connected succesfully'))
    .then(()=> client.query("select * from employees where name= $1", ['marilyn'])) //"select * from employees where name= 'marilyn'"
    .then(results => console.table(results.rows)) // returns a nice table with the data
    .catch(e => console.log(e))
    .finally(() => client.end())