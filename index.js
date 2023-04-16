const db = require("./server")
const inquirer = require("inquirer")

function queryDb() {
    inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View Bookings",  
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
        case "View Bookings":
            viewBookings();
            break
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
// joins customer, booking, screening and film tables
  function viewBookings() {
    db.query(`SELECT c.first_name, c.last_name,c.email, f.name, s.start_time FROM bookings b
    JOIN customers c ON b.customer_id = c.id
    JOIN screenings s ON b.screening_id = s.id
    JOIN films f ON s.film_id = f.id`, function (err, res) {
      if (err) throw err;
      console.table(res);
      queryDb();
    })
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
    db.query(`SELECT DISTINCT * FROM customers`, function (err, res) {
      if (err) throw err;
      console.table(res);
      queryDb();
    })
  };

  

  queryDb()