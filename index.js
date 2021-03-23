const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];
function teamMember() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is team member's name?",
      name: "name",
    },
    {
      type: "list",
      message: "Pick team member's role.",
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
      type: "list",
      message: "Do you want to add another team member?",
      name: "add",
      choices: ["yes", "no"],
    },
  ])
  
  //"What is the team member's GitHub username?""
  //"What is the team member's school name?"
  //"What is the team member's office phone number?"
  //function that will start over if yes chosen, otherwise generate profile
  
  
  //switch cases for intern, engineer, manager responses
  //if engineer selected, ask for gh un
  //if intern selected, ask for school
  //if manager selected, ask for office number
  
  //const allEmployees = {
    //engineer: Engineer.getGithub()
    //intern: Intern.getSchool()
    //manager: Manager.getOfficeNum()
  //}
  //console.log(allEmployees[role] ? allEmployees[role] : null);
  

}

//   .then((data) => {
//     console.log(data);
//     //store name of file in const
//     const filename = "README.md";
//     //save information to the file
//     fs.writeFile(filename, generateMarkdown(data),
//       (err) => (err ? console.log(err) : console.log("Your README file has been created!"))
//
