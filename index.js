//modules and packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
//questions for user responses
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (@ symbol not needed)",
        name: 'username',
        default: 'Gavinmr1',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Invalid GitHub username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repository?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Invalid GitHub repository.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Invalid project title.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Invalid project description.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Installation Section: Describe the steps needed to install your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Usage Section: Provide examples and instructions for your project.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Contributing Section: Add contributers and their roles in your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Test Section: Provide any tests for your project and how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "License Section: Choose a license for your project.",
        choices: ['MIT', 'GPL 3.0', 'BSD 3', 'Mozilla 2.0', 'Apache 2.0', 'None'],
        name: 'license'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulation! Your README.md file has been created.")
    });
}
const writeFileAsync = util.promisify(writeToFile);

async function init() {
    try {//prompt questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        //calls github info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
        //info passed into markdown
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
        //generate example
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
}
init();