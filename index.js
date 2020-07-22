const inquirer = require("inquirer");
const fs = require("fs");
// array of questions for user
const questions = [
    {
        type:"input",
        name:"Title",
        message: "What is the Title of your README?"
    },
    {
        type:"input",
        name: "Description",
        message: "Enter a Description of your README"
    },
    {
        type:"list",
        name:"Installation Instructions",
        message: "Enter Installation Instructions"
    }
];
const util = require("util");const writeFileAsync = util.promisify(fs.writeFile);function promptUser() {
return inquirer.prompt(questions)

}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();