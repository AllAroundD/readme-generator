// This function generates the markdown format for the readme file
function generateMarkdown(data, nospaceTitle) {
  // to replace the space it the title for the img
  data.title = data.title.split(' ').join('%20')
  return `
<img src="https://img.shields.io/badge/${data.github}-${data.title}-green">

# ${nospaceTitle}

## Description:
  ${data.description}

## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${data.license}

## Contributing
  ${data.contributing}

## Tests
  ${data.tests}

## Questions
![GitHub Profile Image](${data.profilepic})

[GitHub Profile](https://github.com/${data.github}/)

-If you have any questions, please contact me at [${data.email}](mailto:${data.email}?subject=[GitHub]%20Source%20Question).
`;
}

module.exports = generateMarkdown;
