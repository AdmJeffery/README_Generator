const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")

const 

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
