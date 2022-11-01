// TODO: Include packages needed for this application
// Necessary Files 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// using an arrow function to prompt the questions using inqurer. 
const questions = [
        {
            type: "input",
            name: "apptitle",
            message: "Enter the name of your application."
        },
        {
            type: "input",
            name: "appdescription",
            message: "Describe your application.",
        },
        {
            type: "input",
            name: "useremail",
            message: "Enter your email.",
        },
        {
            type: "input",
            name: "usergithub",
            message: "Enter your GitHub username.",
        },
        {
            type: "list",
            name: "license",
            message: "Choose which license your project will have.",
            choices: ['GNU', 'MIT', 'ISC', 'None'],
        },
        {
            type: "input",
            name: "applicationtesting",
            message: "How do you want to test your application",
        },
        {
            type: "input",
            name: "usertesting",
            message: "How & what information does the user need to know in order to use the repo ",
        },
        {
            type: "input",
            name: "deployapplication",
            message: "Where to deploy the application",
        }
    ]
    // Generates readme using fs & creates a readme with the github username from the questions; Passes data parameter's to the generateMarkdown function then console logs for the user
    function init () {
        inquirer.prompt(questions).then(Data => {
            fs.writeFileSync('readme.md', generateMarkdown(Data))
        })
    }

init ();

