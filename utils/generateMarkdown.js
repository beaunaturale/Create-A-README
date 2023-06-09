function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
  } else if (license === 'Mozilla') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else (license === 'none')
  return ''
};

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === 'ISC') {
    return `(https://opensource.org/licenses/ISC)`;
  } else if (license === 'Mozilla') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'Apache') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else (license === 'none')
  return ''
};

function generateMarkdown(data) {
  return `# ${data.title}

# License Type
${renderLicenseBadge(data.license)}

# License Link
${renderLicenseLink(data.license)}

## Description
${data.description}

## Table of Contents
* [Description](#Description)
* [Installation Instructions](#Installation-Instructions)
* [Usage of this Application](#Usage-of-this-Application)
* [Contributors](#Contributors)
* [Testing](#Testing)
* [Questions](#Questions)

## Installation Instructions
${data.installation}

## Usage of this Application
${data.usage}

## Contributors
${data.contributors}

## Testing
${data.test}

## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).

`;
}

module.exports = generateMarkdown;
