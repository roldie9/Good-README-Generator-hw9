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
            type: "input",
            message: "What kind of license should your project have?",
            name: "licensetype"
        },
        {
            type: "npm i",
            message: "What command should be run to install dependencies?",
            name: "dependencies"
        },
        {
            type: "npm test",
            message: "What command should be run to run tests?",
            name: "tests"
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

        //ToDo Generate Data

        const data = getData(answer);

        fs.writeFile("README.md", data, function() {

        });
    });


    function getData(username, project, description, licensetype, dependencies, tests, about, contributing) {
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
        
        ...
        ${dependencies}
        ...
        
        ## Usage

        ${about}
        
        ## License

        ${licensetype}
        
        ## Contributing
        
        ${contributing}

        ## Tests
        
        To run tests, run the following command:
        
        ...
        ${tests}
        ...
        
        ## Questions
        
        If you have any questions about the repo, open an issue or contact [${username}](https://api.github.com/users/${username}) directly at null.
        
        `;

    }

    module.exports = getData;

//function init() {}

//init();