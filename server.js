const mysql = require("mysql2")
require ("dotenv").config()

let connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "movie_booking"
  });
  
  connection.connect(function (err) {
    if (err) throw err;
   console.log("movie db connected")
  });

  module.exports = connection;