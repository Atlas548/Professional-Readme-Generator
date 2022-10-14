// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'What would you like to name your Project?',
    name: 'title', 
},
{
    type: 'input',
    message: 'Describe your application.',
    name: 'description',
},
{
    type: 'input',
    message: 'Describe your appliction instructions',
    name: 'installation',
},
{
    type: 'list',
    message: 'Please choose the licenses you want to use for your project.',
    name: 'licenses',
    choices: [
        { value: 'BSD3', },
        { value: 'MIT', },
        { value: 'Apache',},
        { value: 'MPL', },
        { value: 'None', },
    ]
},
{
    type: 'input',
    message: 'How would you like to test your application using command prompt?',
    name: 'test',
    default: 'npm test',
},
{
    type: 'input',
    message: 'Enter your email.',
    name: 'Email',
},
{
    type: 'input',
    message: 'Enter your github username.',
    name: 'github',
},

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        fs.writeFileSync('readme.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
