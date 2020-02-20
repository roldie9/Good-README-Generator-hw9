const questions = [ require("questions");

questions
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "project name",
            message: "What is your project's name?",
            name: ""
        },
        {
            type: "description",
            message: "Please write a short description of your project.",
            name: ""
        },
        {
            type: "license type",
            message: "What kind of license should your project have?",
            name: ""
        },
        {
            type: "dependencies",
            message: "What command should be run to install dependencies?",
            name: "npm i"
        },
        {
            type: "tests",
            message: "What command should be run to run tests?",
            name: "npm test"
        },
        {
            type: "about",
            message: "What does the user need to know about using the repo?",
            name: ""
        },
        {
            type: "contributions",
            message: "What does the user need to know about contributing to the repo?",
            name: ""
        }
    ])

];

function writeToFile("README.md", data) {

}

function init() {

}

init();