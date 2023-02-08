// let's start with the require statements to import modules:
const inquirer = require('inquirer');
const fs = require('fs');

// now let's import our classes from the classes.js file in lib:
const Manager = require('./lib/classes');
const Engineer = require('./lib/classes');
const Intern = require('./lib/classes');

let employee = [];

// now let's create a fcn to initialize the application. Note: here, the 
  // createEmployee fcn returns a promise that, when resolved, creates 'employee' obj 
  // which contains all user's answers collected through the inquirer.prompt calls:
const createEmployee = async () => {
  // Let's first ascertain their job title:
    const roleAnswers = await inquirer.prompt([
      {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Manager', 'Engineer', 'Intern']
      }
    ]);

  // let's get all the common questions in one place:
    const commonAnswers = await inquirer.prompt([
      { name: 'name', message: 'What is your name? ' },
      { name: 'id', message: 'What is your employee ID? ' },
      { name: 'email', message: 'What is your employee email? ' }, // **Validate user input
    ]);
