// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples on how to use this project:'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Explain the contribution guidelines and describe how others can contribute to your project:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for running the tests for your project (if any):'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter the license for your project',
        choices: ['None', 'MIT', 'Apache 2.0', 'Boost 1.0', 'BSD 3-Clause', 'GPL 3.0']
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email Address'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Feel free to ask questions if you need clarification on anything.'
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err)
        throw err;
        console.log('Success! the Generated README.md file has beeen successfully created!');
    });
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generate(userInput));
    });
};

// Function call to initialize app
init();
