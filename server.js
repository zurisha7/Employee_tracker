const promise = require('mysql2-promise');
const cTable = require('console.table');
const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connection');


db.connect(function(error) {
  if(error) throw error;
  userPrompt();
});

const userPrompt = () => {
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
        'View employees by manager',
        'Add a department',
        'Add a role',
        'Add a manager', 
        'Add an employee',
        'Update an employee role',
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
      viewAllEmployees();
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
    else if(choices === 'Update an employee role'){
      updateEmployeeRole();
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
    else if(choices === 'Delete an employee'){
      deleteEmployee
    }
  })  
    };

// View all employees, departments, roles, managers
const viewAllEmployees = function(){ 

    const sql = `SELECT * FROM employees ORDER BY last_name,
              employees.employee_id,
              employees.last_name,
              employees.first_name,
              employees.job_title,
              employees.salary,
              employees.department_id,
              employees.role_id,
              employees.manager_id`;
              
         db.query(sql, (err, res) => {
        if(err) return err;
            else{
        // show results using console.table
            console.table(res);
            return;
            }
            
            });
        
    };

    const viewAllRoles = function(){ 
      const sql = `SELECT * FROM roles ORDER BY job_title,
                  roles.role_id,
                  roles.job_title,
                  roles.salary,
                  roles.department_id`
          db.query(sql, (err, res) => {
          if(err) return err;
              else{
          // show results using console.table
              console.table(res);
              }
            });
    };
    
    const viewAllManagers = function(){ 
      const sql = `SELECT * FROM managers ORDER BY last_name,
                  managers.manager_id,
                  managers.last_name,
                  managers.first_name,
                  managers.salary,
                  managers.role_id`
                
           db.query(sql, (err, res) => {
          if(err) return err;
              else{
          // show results using console.table
              console.table(res);
              }
            });
  };

  const viewAllDepartments = function(){ 
    const sql = `SELECT * FROM departments ORDER BY name,
              departments.department_id,
              departments.name`
              
         db.query(sql, (err, res) => {
        if(err) return err;
            else{
        
            console.table(res);
            }
          });
};  


// View employees by department, role, and manager
    const employeesByDepartment = () => {
      const sql = `SELECT employees.first_name 
                  employees.last_name 
                  departments.name AS department
                  FROM employees
                  LEFT JOIN roles ON employees.role_id = roles.role_id 
                  LEFT JOIN departments ON roles.department_id = departments.department_id`;
      db.query(sql, (err, res) => {
        if (err) throw err;
         console.table(res);
         
          
        });
    };

    // const employeesByRole = () => {
    //   const sql = `SELECT employees.first_name 
    //               employees.last_name
    //               employees.role_id AS job_title
    //               FROM employees
    //               LEFT JOIN roles ON roles.role_id = employees.role_id`;
    //   db.query(sql, (err, res) => {
    //     if (err) return err;
    //      console.table(res);          
    //     });
    // };

    // const employeesByManager = () => {
    //   const sql = `SELECT employees.first_name 
    //               employees.last_name 
    //               employees.manager_id AS manager
    //               FROM employees
    //               LEFT JOIN managers ON managers.manager_id = employees.manager_id`;
                
    //   db.promise().query(sql).spread(function (employees){
    //     console.table(employees)
    //   })
    // };
  
   //Add to departments, roles, managers, employees
  const addDepartment  = () => {
    inquirer.prompt([
    {
      name: 'name',
      type: 'input', 
      message: 'Please enter the name of the new department.'
    },
  
  ])
    .then((answers) => {
    console.log(answers);

    const sql = `INSERT INTO departments (name) 
                 VALUES ("${answers.name}")`
                 
  db.query(sql, (err, res) => {
if (err) return err;
  console.log(res);
  viewAllDepartments();
  });
});
};

const addRole  = () => {
    inquirer.prompt([
    {
      name: 'job_title',
      type: 'input', 
      message: 'Please enter the name of the new role.'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Please enter the salary of the new role.'
    },
    {
      name: 'department_id',
      type: 'input',
      message: 'Please enter department ID associated with the role.'
    }
  
  ])
    .then((answer) => {
    console.log(answer);

    const sql = `INSERT INTO roles (job_title, salary, department_id) 
                 VALUES ('${answer.job_title}', '${answer.salary}', '${answer.department_id}')`
                 
  db.query(sql, (err, res) => {
if (err) return err;
  console.log(res);
  viewAllRoles();
  });
});
};

const addManager = () => {
    inquirer.prompt([
    {
      name: 'last_name',
      type: 'input', 
      message: 'Please enter the last name of the new manager.'
    },
    {
      name: 'first_name',
      type: 'input',
      message: 'Please enter the first name of the new manager.'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Please enter the salary of the new manager.'
    },
    {
      name: 'role_id',
      type: 'input',
      message: 'Please enter the role_id associated with the new manager.'
  }
  ])
    .then((answer) => {
    console.log(answer);

    const sql = `INSERT INTO managers (last_name, first_name, salary, role_id) 
                 VALUES ('${answer.last_name}', '${answer.first_name}', '${answer.salary}', '${answer.role_id}')`
                 
  db.query(sql, (err, res) => {
if (err) return err;
  console.log(res);
  viewAllManagers();
  });
});
};

const addEmployee = () => {
    inquirer.prompt([
    {
      name: 'last_name',
      type: 'input', 
      message: 'Please enter the last name of the new employee.'
    },
    {
      name: 'first_name',
      type: 'input',
      message: 'Please enter the first name of the new employee.'
    },
    { 
      name: 'job_title',
      type: 'input',
      massage: 'Please enter the role of the new employee.'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'Please enter the salary of the new employee.'
    },
    {
      name: 'department_id',
      type: 'input',
      message: 'Please enter the department ID associated with the new employee.'
    },
    {
      name: 'role_id',
      type: 'input',
      message: 'Please enter the role_id associated with the new manager.'
  },
  {
      name: 'manager_id',
      type: 'input',
      message: 'Please enter the manager id associated with the new employee.'
}
  ])
    .then((answer) => {
    console.log(answer);

    const sql = `INSERT INTO employees (last_name, first_name, job_title, salary, department_id, role_id, manager_id) 
                 VALUES ('${answer.last_name}', '${answer.first_name}', '${answer.job_title}', '${answer.salary}', '${answer.department_id}', '${answer.role_id}', '${answer.manager_id}')`
                 
  db.query(sql, (err, res) => {
if (err) return err;
  console.log(res);
  viewAllEmployees();
  });
});
};

// update Employee

async function updateEmployeeRole() {
      const employeeID = await inquirer.prompt(first_name());
    
    db.query(`SELECT employees.last_name, employees.first_name FROM employees`, async (err, res) => {
    if(err) return err;
      const { role } = await inquirer.prompt ([
    {
      name: 'last_name',
      type: 'input',
      message: 'Please enter the last name of the employee you would like to update.'
    },
    {
      name: 'first_name',
      type: 'input',
      message: 'Please enter the first name of the employee you woule like to update.'
      },

      {
      name: 'role_id', 
      type: 'list',
      choices: () => res.map(res => res.job_title),
      message: 'What is the employees new role?'
    }
    ]);
    let roleId;
    for (const row of res) {
      if (row.job_title === role) {
      roleId = row.role_id;
      continue;
    }
  }
  db.query(`UPDATE employees
  SET role_id = ${roleId}
  WHERE employees.employee_id = ${employeeID.last_name}, ${employeeID.first_name}`, async (err, res) => {
  if(err) return err;
  viewAllEmployees();
});
});
 }
