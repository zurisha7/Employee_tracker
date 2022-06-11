const inquirer = require('inquirer');

const addEmployee = async () => {
    return inquirer.prompt([
    {
    type: 'input',
    name: 'last_name',
    message: 'Please enter last name?(Required)',
    validate: nameInput => {
        if (nameInput) {
        return true;
        } else {
        console.log('Please enter last name!');
        return false;
        }
      }
    },
    {
        type: 'input',
        name: 'first_name',
        message: 'Please enter first name?(Required)',
        validate: nameInput => {
        if (nameInput) {
        return true;
        } else {
        console.log('Please enter your name!');
        return false;
        }
      }
    },
        
          
        
     ])
    };
