const mysql2 = require('mysql2');
const inquirer = require('inquirer');

const userPrompt = async () => {
    return inquirer.prompt([
    {
      name: 'choices',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all managers',
        'View all employees',
        'View employees by role',
        'View employees by department',
        'Add a department',
        'Add a role',
        'Add a manager', 
        'Add an employee',
        'Update a role',
        'Update a manager',
        'Update an employee',
        'Delete a department',
        'Delete a role',
        'Delete a manager',
        'Delete an employee',
        'View Total budget',
        'Cancel'
      ]
    }
  ])
  .then((answers) => {
    const { choices } = answers;

    if(choices === 'View all departments') {
      viewAllDepartments();
    }
    else if(choices === 'View all roles') {
      viewAllRoles();
    }
    else if(choices === 'View all managers'){
      viewAllManagers();
    }
    else if(choices === 'View all employees'){
      viewAllManagers();
    }
    else if(choices === 'View employees by role'){
      employeesByRole();
    }
    else if(choices === 'View employees by department'){
      employeesByDepartment();
    }
    else if(choices === 'View employees by manager'){
      employeesByManager();
    }
    else if(choices === 'Add a department') {
      addDepartment();
    }
    else if(choices === 'Add a role'){
      addRole();
    }
    else if(choices === 'Add a manager'){
      addManager();
    }
    else if(choices === 'Add an employee'){
      addEmployee();
    }
    else if(choices === 'Update a role'){
      updateRole();
    }
    else if(choices === 'Update a manager'){
      updateManager();
    }
    else if(choices === 'Update an employee') {
      updateEmployee();
    }
    else if(choices === 'Delete a department'){
      deleteDepartment();
    }
    else if(choices === 'Delete a role'){
      deleteRole();
    }
    else if(choices === 'Delete a manager'){
      deleteManager();
    }
    else if(choices === 'Delete a role'){
      deleteRole();
    }
    else if(choices === 'Delete a manager'){
      deleteManager();
    }
    else if(choices === 'Delete an employee'){
      deleteEmployee();
    }
    else if(choices === 'View total budget'){
      totalBudget(); 
    }
  })  
    };
