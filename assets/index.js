const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
const chalk = require("chalk")
const generateMarkdown = require("../utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile)
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// this prompts the user with questions to generate the readme
function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the Project Title?",
        validate: (input) => {
          if (input == ""){
            return `Error: Please enter a ${chalk.red('Project Title')}`
          }
          return true
        }
      },
      {
        type: "input",
        name: "description",
        message: "What is the Project Description?",
        validate: (input) => {
          if (input == ""){
            return `Error: Please enter a ${chalk.red('Description')}`
          }
          return true
        }
      },
      {
        type: "input",
        name: "installation",
        message: "Please provide Installation steps. (hit <enter> if no installation required)"
      },
      {
        type: "input",
        name: "usage",
        message: "Please provide the Usage details",
        validate: (input) => {
          if (input == ""){
            return `Error: Please enter the ${chalk.red('Usage details')}`
          }
          return true
        }
      },
      {
        type: "input",
        name: "license",
        message: "Please enter License(s) details. [hit <enter> if no license(s) required]",
        validate: (input) => {
          if (input == ""){
            this.license = "No license required"
          }
          return true
        }
      },
      {
        type: "input",
        name: "contributing",
        message: "Please enter Contributing guidelines for this project.  (hit <enter> if no guidelines required)",
        validate: (input) => {
          if (input == ""){
            this.contributing = "No contributing guidelines required"
        }
        return true
      }
    },
      {
        type: "input",
        name: "tests",
        message: "Please provide tests to be performed: "
      },
      {
        type: "input",
        name: "github",
        message: "Please enter your GitHub Username: ",
        validate: (input) => {
          if (input == ""){
            return `Error: Please enter the ${chalk.red('GitHub Username')}`
          }
          return true
        }
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email address: ",
        validate: (input) => {
          if (input == ""){
            return `Error: Please enter the ${chalk.red('email address')}`
          }
          if (!regex.test(input)){
            return `Error: Please enter a valid ${chalk.red('email address')}`
          }
          return true
        }
      },
      {
        type: "input",
        name: "profilepic",
        message: "Please enter your GitHub profile picture URL: ",
        validate: (input) => {
          if (input == "" | !(input.includes('http'))){
            return `Error: Please enter a ${chalk.red('valid url')}`
          }
          return true
        }
      }
    ]);
  }
  
  async function init() {
    console.log("Start of README generator")
    try {
      const answers = await promptUser();
      answers.title = answers.title.split(" ").join("-")
      const text = generateMarkdown(answers);
      await writeFileAsync("./dist/README.md", text);
      console.log("Successfully wrote to dist/README.md");
    } catch(err) {
      console.log(err);
    }
  }
 
  init();
  