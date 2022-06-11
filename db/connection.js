const inquirer = require('inquirer');
const mysql2 = require('mysql2');

//connect to database
const db = mysql2.createConnection(
    {
        host: 'localhost', 
        user: 'root',
        password: '4Un1qu3PassWord!!',
        database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
);

db.connect(function(error) {
    if(error) throw error;
    console.log(error)
    addData();
});

const addData = () => {
    inquirer.prompt
}



module.exports = db;