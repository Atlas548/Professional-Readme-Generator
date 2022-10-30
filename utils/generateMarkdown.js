// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'GNU'){
        return `[![license: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    else if (license === 'MIT'){
        return `[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (license === 'ISC'){
        return `[!license: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
    }
    else (license === 'None'){
        return ``;
    }
}
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `* [License](#license 📔)`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If the user selects any license ofther than none it will append this content to the generateMarkdown function
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
    Licensed under ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
// Using the data parameters from the user choices from the questions to append in the readme
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* ${renderLicenseLink(data.license)}
* [Test](#test)
* [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

${renderLicenseSection(data.license)}

## Test

* Run command ${data.test} to test the application.

## Questions

* Any questions or concerns regarding the application please contact me via email at ${data.useremail}
* Link to my GitHub portfolio to view my work at [${data.usergithub}](https://github.com/${data.usergithub}/).

`;
}

module.exports = generateMarkdown;
