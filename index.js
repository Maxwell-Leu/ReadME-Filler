// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What would you like the title to be?',
    'What is the description of you application?',
    'How would a user install your application?',
    'What are the contribution guidelines?',
    'What are the Instructions for testing?',
    'What is your GitHub username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, '', function(err){
        if(err) throw err;
    });
    fs.appendFile(`./${fileName}`, 'added2', (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
}

// TODO: Create a function to initialize app
function init() {
    var data;
    writeToFile('README.md', data);
}

// Function call to initialize app
init();
