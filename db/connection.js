const mysql2 = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'root',
        password: '4Un1qu3PassWord!!',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
);

module.exports = db;