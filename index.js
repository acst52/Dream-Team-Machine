// let's start with the require statements to import modules:
const inquirer = require('inquirer');
const fs = require('fs');

// now let's import our classes from the classes.js file in lib:
const Manager = require('./lib/classes');
const Engineer = require('./lib/classes');
const Intern = require('./lib/classes');

let employee = [];

// now lets create fcns for each Employee type that contain the common + role-specific Qs
function createManager() {
      return new Promise((resolve) => {
            inquirer.prompt([
            { name: 'name', message: 'What is your name? ' },
            { name: 'id', message: 'What is your employee ID? ' },
            { name: 'email', message: 'What is your employee email? ' },
      ]).then(commonAnswers => {
            inquirer.prompt([
            { name: 'officeNumber', message: 'office number: ' },
            ]).then(managerAnswers => {
            resolve(new Manager(commonAnswers.name, commonAnswers.id, commonAnswers.email, managerAnswers.officeNumber));
      })
   })
});
}
        
function createEngineer() {
      return new Promise((resolve) => {
            inquirer.prompt([
            { name: 'name', message: 'What is your name? ' },
            { name: 'id', message: 'What is your employee ID? ' },
            { name: 'email', message: 'What is your employee email? ' },
      ]).then(commonAnswers => {
            inquirer.prompt([
              { name: 'github', message: 'GitHub username: ' },
            ]).then(engineerAnswers => {
            resolve(new Engineer(commonAnswers.name, commonAnswers.id, commonAnswers.email, engineerAnswers.github));
      })
   })
});
}

function createIntern() {
      return new Promise((resolve) => {
            inquirer.prompt([
            { name: 'name', message: 'What is your name? ' },
            { name: 'id', message: 'What is your employee ID? ' },
            { name: 'email', message: 'What is your employee email? ' },
      ]).then(commonAnswers => {
            inquirer.prompt([
                  { name: 'school', message: 'school attended: ' },
            ]).then(internAnswers => {
            resolve(new Intern(commonAnswers.name, commonAnswers.id, commonAnswers.email, internAnswers.school));
      })
   })
});
}
