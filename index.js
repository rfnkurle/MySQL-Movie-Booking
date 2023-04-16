const db = require("./server")
const inquirer = require("inquirer")

function queryDb() {
    inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all films",
          "View all customers",
          "View all cinema rooms",
          "Insert film",
          "Insert customer",
          "Open a new room",
          "Remove customer from schedule",
          "Remove a film",
          "Close a room",
          "Exit"
        ]
      }])
      .then(function (answer) {
        switch (answer.action) {
          case "View all films":
            viewFilms();
            break;
          case "View all customers":
            viewCustomers();
            break;
          case "View all cinema rooms":
            viewRooms();
            break;
          case "Insert film":
            addFilm();
            break;
          case "Insert customer":
            addCustomer();
            break;
          case "Open a new room":
            addRoom();
            break;
          case "Remove a film":
            removeFilm();
            break;
          case "Remove customer from schedule":
            removeCustomer();
            break;
          case "Close a room":
            closeRoom();
            break;
          case "Exit":
            console.log("goodbye")
            db.end();
            break;
        }
      });
  };

  function viewFilms() {
    db.query(`SELECT * FROM films`, function (err, res) {
      if (err) throw err;
      console.table(res);
      queryDb();
    })
  };

  function viewRooms() {
    db.query(`SELECT * FROM rooms`, function (err, res) {
      if (err) throw err;
      console.table(res);
      queryDb();
    })
  };

  function viewCustomers() {
    db.query(`SELECT * FROM customers`, function (err, res) {
      if (err) throw err;
      console.table(res);
      queryDb();
    })
  };

  queryDb()