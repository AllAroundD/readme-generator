function generateMarkdown(data) {
  return `
# ${data.title}

## Description:
  ${data.description}

## Table of Contents
  - [Installation] (#Installation)
  - [Usage] (Usage)
  - [License] (License)
  - [Contributing] (Contributing)
  - [Tests] (Tests)
  - [Questions] (Questions)

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
