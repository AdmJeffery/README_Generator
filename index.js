const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt ([

    {
        type:"input",
        name:"Title",
        message: "What is the Title of your README?",
        validate: catchEmpty
    },
    {
        type:"input",
        name: "Description",
        message: "Enter a Description of your README",
        validate: catchEmpty
    },
    {
        type:"input",
        name:"Installation Instructions",
        message: "Enter Installation Instructions",
        validate: catchEmpty
    },
    {
        type : "input",
        name: "Usage",
        message: "Enter Usage Instructions",
        validate: catchEmpty
    },
    {
        type: "list",
        name: "License",
        message: "Please select which licenses you wish to use",
        choices: ["Apache 2.0", "MIT", "BSD 3","None"],
        validate: catchEmpty
    }
    ]);
}

function catchEmpty (value){
    if (value === ""){
        return "Please enter requested information"
    }
    else return true;
} 