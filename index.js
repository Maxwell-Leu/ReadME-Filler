// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of the application?',
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
    fs.appendFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Commit logged!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title?',
        },
        {
            type: 'input',
            name: 'description',
            message:'Give a short description of you project.'
        },
        {
            type: 'input',
            name: 'instal',
            message: 'What does the user need to do for install'
        },
        {
            type:'input',
            name: 'usage',
            message: 'How do you use the application?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Guidelines for contributions'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How to use the test?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license covers you application?',
            choices: ['afl-3.0','apache-2.0','artistic-2.0','bsl-1.0','bsd-2-clause','bsd-3-clause','bsd-3-clause-clear','0bsd','cc','cc0-1.0','cc-by-4.0','cc-by-sa-4.0','wtfpl','ecl-2.0','epl-1.0','epl-2.0','eupl-1.1','agpl-3.0','gpl','gpl-2.0','gpl-3.0','lgpl','lgpl-2.1','lgpl-3.0','isc','lppl-1.3c','ms-pl','mit','mpl-2.0','osl-3.0','postgresql','ofl-1.1','ncsa','unlicense','zlib']
        },
        {
            type: 'input',
            name: 'username',
            message:'What is your GitHub username?'
        },
        {
            type:'input',
            name:'email',
            message: 'What is your email?'
        },
    ])
    .then((data) => {
        writeToFile('NEWREADME.md', data);
    });
    
    
}

// Function call to initialize app
init();
