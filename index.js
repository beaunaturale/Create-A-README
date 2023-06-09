const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of Application',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe Your Application',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation Instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage of Application',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select an Applicable License',
    choices: ['MIT', 'ISC', 'Mozilla', 'Apache', 'none'],
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'List Any Contributors',
  },
  {
    title: 'input',
    name: 'test',
    message: 'Test of the Application',
  },
  {
    title: 'input',
    name: 'email',
    message: 'Provide Your Email',
  },
  {
    title: 'input',
    name: 'creator',
    message: 'Your Github User Name',
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log('Create-A-README.md');
    writeToFile('README.md', generateMarkdown({ ...responses }));
  });
}

init();
