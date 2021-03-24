const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArr = [];

function teamMember() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the team member's name?",
        name: "name",
      },
      {
        type: "list",
        message: "Pick the team member's role.",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        message: "What is the team member's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the team member's email address?",
        name: "email",
      },
      {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "add",
      },
    ])
    // function that will start over if confirmed, otherwise generate profile
    .then((data) => {
      if (data.add) {
        data.push(teamArr);
      } else {
        return teamArr;
      }
    })
    .then((data) => {
      switch (data.role) {
        case "Engineer":
          specEngineer(data);
          break;
        case "Intern":
          specIntern(data);
          break;
        case "Manager":
          specManager(data);
          return teamArr.push(data.role);
      }
    });
  // const filename =
  //save information to the file
  // fs.writeFile(filename, teamMembers(data),
  //   (err) => (err ? console.log(err) : console.log("Team has been created."));

  // switch cases for intern, engineer, manager responses
  // function asking for specific info depending on chosen role

  function specEngineer() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the team member's GitHub username?",
        name: "github",
      },
    ]);
  }
  function specIntern() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the team member's school name?",
        name: "school",
      },
    ]);
  }
  function specManager() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the team member's office phone number?",
        name: "office",
      },
    ]);
  }

  // const allEmployees = {
  //   Engineer: Engineer.getGithub(),
  //   Intern: Intern.getSchool(),
  //   Manager: Manager.getOfficeNum(),
  // };
  // console.log(allEmployees[role] ? allEmployees[role] : null)
}
