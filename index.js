// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown')
const fs = require ('fs')
const path = require('path')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title to your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'would you like to describe your project?',
    },
    {
        type: 'confirm',
        name: 'toc',
        message: 'would you like to add a table of content?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'how do you install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how do you use your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'how would you like other to contribute to your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'how would you test your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what license would you like to add to your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync(path.join(__dirname,'output.md'),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
      .then((answers) => {
        console.log(answers);
       const markdown = generateMarkdown (answers)
       writeToFile (markdown) 
      })
}

// Function call to initialize app
init();
