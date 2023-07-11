// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

## Description

${data.description}

## Table of Contents

-[Installation](#installation)\\
-[Usage](#usage)\\
-[Contribution Guidelines](#contribution_guidelines)\\
-[Test Instructions](#test_instructions)\\
-[License](#license)\\
-[Questions](#Questions)\

## Installation Instructions

${data.instal}

## Usage

${data.usage}

## Contribution Guidelines

${data.contribution}

## Test Instructions

${data.test}

## License

This application is under this license: ${data.license}


## Questions

For further questions reachout
${data.username}
${data.email}
`;
}

module.exports = generateMarkdown;
