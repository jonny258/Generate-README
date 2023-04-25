// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const licenses = [
    {
        name: 'MIT License',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
        description: 'A permissive license that allows users to do anything with the code, as long as they provide attribution and don’t hold the author liable.'
    },
    {
        name: 'Apache License 2.0',
        badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
        description: 'A permissive license that allows users to use, distribute, and modify the code for commercial or non-commercial purposes, as long as they provide attribution and include the license text.'
    },
    {
        name: 'GNU General Public License (GPL)',
        badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
        description: 'A copyleft license that requires users to release derivative works under the same license, and to provide access to the source code for the work and any modifications.'
    },
    {
        name: 'GNU Lesser General Public License (LGPL)',
        badge: 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg',
        description: 'A weaker copyleft license that allows users to link to the code from proprietary software, but requires that any changes to the code be released under the LGPL.'
    },
    {
        name: 'BSD 3-Clause License',
        badge: 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
        description: 'A permissive license that allows users to use, distribute, and modify the code for commercial or non-commercial purposes, as long as they provide attribution and include the license text.'
    },
    {
        name: 'Mozilla Public License 2.0',
        badge: 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
        description: 'A copyleft license that requires users to release any changes or derivative works under the MPL, but allows them to combine the code with proprietary code.'
    },
    {
        name: 'The Unlicense',
        badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
        description: 'A public domain dedication that allows users to do anything with the code, without attribution or liability.'
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
      name: 'github',
      message: 'Please provide your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your primary email:'
      }
  ];
  
// TODO: Create a function to write README file
function writeToFile(fileName, questions) {
    inquirer
        .prompt(questions)
        .then((res) => {
            const selectedBadge = licenses.filter(item => {
                if(item.name === res.license){
                    return item;
                }
            })
            const badgeImage = selectedBadge[0].badge;
            const badgeDescription = selectedBadge[0].description;

            const README = `
# ${res.title} <img src="${badgeImage}">

## Description
${res.description}

## Table of Contents

- [Title of My Project](#title-of-my-project)
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${res.installation}

## Usage

${res.usage}

## License

${badgeDescription}

## Contributing

${res.contributing}

## Tests

${res.tests}

## Questions

If you have any questions reach out via email

Email: ${res.email}

GitHub: https://github.com/${res.github}
            `
            


            fs.writeFile(fileName, README, (err) => {
                err ? console.log(err) : console.log("this worked")
            })
        })
}


// TODO: Create a function to initialize app
function init(){ 
  writeToFile('README.md', questions)
}

// Function call to initialize app
init();
