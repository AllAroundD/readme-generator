function generateMarkdown(data) {
  return `
# ${data.title}

## Description:
  ${data.description}

## Table of Contents
  1. Installation
  2. Usage
  3. License
  4. Contributing
  5. Tests
  6. Questions

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
