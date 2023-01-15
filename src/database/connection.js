// Import mysql module
const mysql = require("mysql")
// Setup database connection parameter

const dbConection = () => {

    const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "api_rest"
    })

    connection.connect(function(e) {
    if (e) {
    
        // Show error messaage on failure
        return console.error("error: " + e.message)
        }
        
        // Show success message if connected
        console.log("conectado a la base de datos")
    })

    return connection;
  };


module.exports = {
    dbConection
};