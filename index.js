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
        //add info from above to team array
        data.push(teamArr);
        //goes back to prompts
        teamMember();
      } else {
        return teamArr;
      }
    })
    // switch cases for intern, engineer, manager responses
    .then((data) => {
      switch (data.role) {
        case "Engineer":
          specEngineer(data) = new Engineer;
          break;
        case "Intern":
          specIntern(data) = new Intern;
          break;
        case "Manager":
          specManager(data) = new Manager;
          return teamArr.push(data);
      }
    });
  // const filename =
  //save information to the file
  // fs.writeFile(filename, teamMembers(data),
  //   (err) => (err ? console.log(err) : console.log("Team has been created."));

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

}
