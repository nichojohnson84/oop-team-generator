const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const render = require("./lib/htmlRender");

//Adding file
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

var team = [];

// Run inquirer to basically fill out the templates and to create objects for each team member

function promptManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "ID",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "Name",
        message: "What is your Name?",
      },
      {
        type: "input",
        name: "email",
        message: "Where are you email?",
      },
      {
        type: "input",
        name: "OfficeNumber",
        message: "What is your favorite Office Number?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.Name,
        answers.ID,
        answers.email,
        answers.OfficeNumber
      );
      team.push(manager);
      createTeam();
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "ID",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "Name",
        message: "What is your Name?",
      },
      {
        type: "input",
        name: "email",
        message: "Where are you email?",
      },
      {
        type: "input",
        name: "Github",
        message: "What is your Github username?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.Name,
        answers.ID,
        answers.email,
        answers.Github
      );
      team.push(engineer);
      createTeam();
    });
}

function promptIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "ID",
        message: "What is your ID?",
      },
      {
        type: "input",
        name: "Name",
        message: "What is your Name?",
      },
      {
        type: "input",
        name: "email",
        message: "Where are you email?",
      },
      {
        type: "input",
        name: "School",
        message: "What is your School?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.Name,
        answers.ID,
        answers.email,
        answers.School
      );
      team.push(intern);
      createTeam();
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "TeamChoices",
        message: "What kind of team do you want to add?",
        choices: ["Manager", "Engineer", "Intern", "No More member"],
      },
    ])
    .then((userChoices) => {
      switch (userChoices.TeamChoices) {
        case "Engineer":
          promptEngineer();
          break;
        case "Intern":
          promptIntern();
          break;
        case "Manager":
          promptManager();
          break;
        case "No More member":
          console.log(team);
          let html = render(team);
          writeFileAsync(outputPath, html, "utf8");
          break;
        default:
          createTeam();
      }
    });
  return team;
}

createTeam();
