// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const licenses = [
    {
        name: 'MIT License',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
    },
    {
        name: 'Apache License 2.0',
        badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    },
    {
        name: 'GNU General Public License (GPL)',
        badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    },
    {
        name: 'GNU Lesser General Public License (LGPL)',
        badge: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg'
    },
    {
        name: 'BSD 3-Clause License',
        badge: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'
    },
    {
        name: 'Mozilla Public License 2.0',
        badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
    },
    {
        name: 'The Unlicense',
        badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg'
    }
];

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for your project:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license do you want to use for your project?',
      choices: licenses
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines for your project:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide instructions for testing your project:'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Please provide information on how to reach you with any questions about your project:'
    }
  ];
  
// TODO: Create a function to write README file
function writeToFile(fileName, questions) {
    inquirer
        .prompt(questions)
        .then((res) => {
            const selectedBadge = licenses.filter(badge => {
                if(badge.name === res.licenses){
                    return badge;
                }
            })
            console.log(selectedBadge[0].badge)


            fs.writeFile(fileName, 'res', (err) => {
                err ? console.log(err) : console.log("this worked")
            })
        })
}

writeToFile('README.md', questions)
// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
