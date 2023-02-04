// runs the application, generates index.html into the dist directory
// let's start with the require statements to import modules:
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require('./src/generateHTML')
