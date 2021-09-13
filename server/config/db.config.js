// const mysql = require('mysql');
const mysql = require('mysql2');

// create the pool
// const pool = mysql.createPool({
//     user: "root",
//     host: "localhost",
//     password: '',
//     database: "meetyourgs",
// })

const pool = mysql.createPool({
    user: "root",
    host: "localhost",
    password: 'root',
    database: "meetyourgs"
});

pool.getConnection((err) => {
    if (err) {
        console.log("database connection failed")
        console.log(err)
    }
    else console.log("Connected to database")
})

// now get a Promise wrapped instance of that pool
const dbConn = pool.promise();

module.exports = dbConn;
