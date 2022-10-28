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

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// Using the data parameters from the user choices from the questions to append in the readme
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ${data.name}

  ## Table of Contents
    * [Description] (#appdescription)
    * 
`;
}

module.exports = generateMarkdown;
