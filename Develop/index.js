// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of Application',
  },
  {
    type: 'input',
    name: 'description',
    message: 'please describe the function and/or purpose of your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'installation requirement (npm i)',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'describe usage of application or provide screenshot',
  },
  {
    type: 'list',
    name: 'license',
    message: 'please select an applicable license',
    choices: ['MIT', 'ISC', 'Mozilla', 'Apache', 'none'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'list any contributors',
  },
  {
    title: 'input',
    name: 'test',
    message: 'provide a test of the application',
  },
  {
    title: 'input',
    name: 'email',
    message: 'provide your email',
  },
  {
    title: 'input',
    name: 'creator',
    message: 'provide your github user',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('Create-A-README.md');
    writeToFile('README.md', generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();
