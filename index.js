// TODO:
  // 1. fix html output issue (see generateHTML.js)
  // 2. unit tests w/ jest?!

// first import all required modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// lets also import our helper function
const generateHTML = require('./src/generateHTML');

// and finally import our classes
const Manager = require('./lib/classes');
const Engineer = require('./lib/classes');
const Intern = require('./lib/classes');

// set up vars for path and html file name
const directoryName = path.resolve(__dirname, "dist");
const distPath = path.join(directoryName, "index.html");

// set the employees array up globally
let employees = [];

// now lets create fcns for each Employee type that contain the common + role-specific Qs... to be called upon in a switch later
function mainMenu() {
      function createManager() {
                  inquirer.prompt([
                  { name: 'name', message: 'What is the team manager\'s name? ' },
                  { name: 'id', message: 'What is the manager\' ID? ' },
                  { name: 'email', message: 'What is the manager\' email? ' },
                  { name: 'officeNumber', message: 'Manager office number: ' },
                  ]).then(managerAnswers => {
                        const manager = new Manager (
                              managerAnswers.name,
                              managerAnswers.id,
                              managerAnswers.email,
                              managerAnswers.officeNumber
                        );
                        employees.push(manager);
                        createTeam();
            })
         }

      function createTeam() {
            inquirer.prompt([
                  { type: 'list', 
                  name: 'choice', 
                  message: 'Which type of team member would you like to add next? ', 
                  choices: ["Engineer", "Intern", "I don't want to add any more team members"]}

            ]).then((choice) => {
                  switch (choice.choice) {
                        case 'Engineer': 
                        createEngineer();
                        break;
                        case 'Intern':
                        createIntern();
                        break;
                        default: writeFile();
                  }
            })
      }
      function createEngineer() {
                  inquirer.prompt([
                  { name: 'engineerName', message: 'What is the engineer\'s name? ' },
                  { name: 'engineerId', message: 'What is the engineer\'s ID? ' },
                  { name: 'engineerEmail', message: 'What is the engineer\'s email? ' },
                  { name: 'github', message: 'what is the engineer\'s GitHub username: ' },
            ]).then(engineerAnswers => {
                  const engineer = new Engineer (
                        engineerAnswers.engineerName,
                        engineerAnswers.engineerId,
                        engineerAnswers.engineerEmail,
                        engineerAnswers.github
                  );
                  employees.push(engineer);
                  createTeam();
      })
   }
   function createIntern() {
            inquirer.prompt([
            { name: 'internName', message: 'What is the intern\'s name? ' },
            { name: 'InternId', message: 'What is the intern\'s ID? ' },
            { name: 'InternEmail', message: 'What is the intern\'s email? ' },
            { name: 'school', message: 'which school did the intern attend: ' },
            ]).then(internAnswers => {
                  const intern = new Intern (
                        internAnswers.internName,
                        internAnswers.internId,
                        internAnswers.internEmail,
                        internAnswers.school
                  );
                  employees.push(intern);
                  createTeam();
      })
};
function writeFile() {
      if (!fs.existsSync(directoryName)) {
            fs.mkdirSync(directoryName)
      }
      fs.writeFileSync(distPath, generateHTML(employees), "utf-8")
}
createManager();
};

mainMenu();
