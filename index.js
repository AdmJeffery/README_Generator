const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt ([

    {
        type:"input",
        name:"title",
        message: "What is the Title of your README?",
        validate: catchEmpty
    },
    {
        type:"input",
        name: "description",
        message: "Enter a Description of your README:",
        validate: catchEmpty
    },
    {
        type:"input",
        name:"installation",
        message: "Enter Installation Instructions:",
        validate: catchEmpty
    },
    {
        type : "input",
        name: "usage",
        message: "Enter Usage Instructions:",
        validate: catchEmpty
    },
    {
        type: "list",
        name: "license",
        message: "Please select which licenses you wish to use:",
        choices: ["Apache 2.0", "MIT", "BSD 3","Boost 1.0","None"],
        validate: catchEmpty
    },
    {
        type:"input",
        name:"contributionConfirm",
        message: "Would you like others to contribute to this project?",
        validate: catchEmpty
    },
    {
        when: (response) => response.contributionConfirm === true,
        type:"input",
        name:"contribution",
        message: "Please enter contribution guidelines:",
        validate: catchEmpty
    },
    {
        type:"input",
        name:"testing",
        message: "Please state example tests for your program:",
        validate: catchEmpty
    },
    {
        type:"input",
        name:"gitHubName",
        message: "Please enter your GitHub username:",
        validate: catchEmpty
    },
    {
        type:"input",
        name:"email",
        message: "What is the best email to contact you with?",
        validate: catchEmpty
    },

    ]);
}

function catchEmpty (value){
    if (value === ""){
        return "Please enter requested information"
    }
    else return true;
} 

promptUser()