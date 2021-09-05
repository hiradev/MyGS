// const mysql = require('mysql');
const mysql = require('mysql2');

// create the pool
const pool = mysql.createPool({
    user: "root",
    host: "localhost",
    password: '',
    database: "meetyourgs",
});

// now get a Promise wrapped instance of that pool
const dbConn = pool.promise();

module.exports = dbConn;
