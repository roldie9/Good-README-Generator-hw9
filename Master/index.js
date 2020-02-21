const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

inquirer.prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your project's name?",
            name: "project"
        },
        {
            type: "input",
            message: "Please write a short description of your project.",
            name: "description"
        },
        {
            type: "list",
            message: "What kind of license should your project have?",
            choices: ["BSD","Apache","Eclipse"],
            name: "licensetype"
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "dependencies",
            default: "npm i"
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "tests",
            default: "npm test"
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "about"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contributing"
        }
    ]).then(function(answer) {
        
        console.log(answer);

        if (answer.licensetype === "BSD") {
            answer.licensetype = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        }
        if (answer.licensetype === "Apache") {
            answer.licensetype = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        }
        if (answer.licensetype === "Eclipse") {
            answer.licensetype = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
        }
        
        //const queryURL = 'https://api.github.com/users/${username}';

        //fetch data using axios
        
        //axios.get(queryUrl).then(function(res) {
            //const ghUserName = res.data.map(function(user) {
            //return user.name;
            //});
        //})   

        //ToDo Generate Data

        console.log("answer", JSON.stringify(answer));

        const data = getData(answer);

        fs.writeFile("README.md", data, function() {

        });
    });


function getData({username, project, description, licensetype, dependencies, tests, about, contributing}) {

    console.log("project",project);
    return `
# ${project}

## Description

${description}
        
## Table of Contents
        
* [Installation](#installation)
        
* [Usage](#usage)
        
* [License](#license)
        
* [Contributing](#contributing)
        
* [Tests](#tests)
        
* [Questions](#questions)
        
## Installation
        
To install necessary dependencies, run the following command:
        
\`\`\`
${dependencies}
\`\`\`
        
## Usage

${about}
        
## License

${licensetype}
        
## Contributing
        
${contributing}

## Tests
        
To run tests, run the following command:
        
\`\`\`
${tests}
\`\`\`
        
## Questions
        
If you have any questions about the repo, open an issue or contact [${username}](https://api.github.com/users/${username}) directly at null.
        
`;

}

    module.exports = getData;

//function init() {}

//init();