// Import mysql module
const mysql = require("mysql")
// Setup database connection parameter

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "api_rest"
};

const pool = mysql.createPool(config);

module.exports = pool;