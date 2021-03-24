const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArr = [];
teamMember();
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
    ])
    
    // switch cases for intern, engineer, manager responses
    .then((data) => {
      switch (data.role) {
        case "Engineer":
          specEngineer();
          break;
        case "Intern":
          specIntern();
          break;
        case "Manager":
          specManager();
          break;
      }
    })
    // .then((data) => {
    //   if (data.add) {
    //     //add info from above to team array
    //     data.push(teamArr);
    //     //goes back to prompts
    //     teamMember();
    //   } else {
    //     fs.writeFile(template.html, data.push(teamArr), 
    //     (err) => (err ? console.log(err) : console.log("Team has been created."))
    //     )}
    //   });

   // function asking for specific info depending on chosen role
  function specEngineer() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the team member's GitHub username?",
        name: "github",
      },
      {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "add",
      },
    ])
    .then((data) => {
      if (data.add) {
        //add info from above to team array
        teamArr.push(data);
        //goes back to prompts
        teamMember();
      } else {
        fs.writeFile("template.html", teamArr.push(data), 
        (err) => (err ? console.log(err) : console.log("Team has been created."))
        )}
      });
  }
  function specIntern() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the team member's school name?",
        name: "school",
      },
      {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "add",
      },
    ])
    .then((data) => {
      if (data.add) {
        //add info from above to team array
        teamArr.push(data);
        //goes back to prompts
        teamMember();
      } else {
        fs.writeFile("template.html", teamArr.push(data), 
        (err) => (err ? console.log(err) : console.log("Team has been created."))
        )}
      });
  }
  function specManager() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the team member's office phone number?",
        name: "office",
      },
      {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "add",
      },
    ])
    .then((data) => {
      if (data.add) {
        //add info from above to team array
        teamArr.push(data);
        //goes back to prompts
        teamMember();
      } else {
        fs.writeFile("template.html", //function to renderhtml(teamArr) 
        (err) => (err ? console.log(err) : console.log("Team has been created."))
        )}
      });
  }  
  
     
//something to render html if confirm is no
  
    // const filename =
  //save information to the file
  // fs.writeFile(filename, teamMembers(data),
  //   (err) => (err ? console.log(err) : console.log("Team has been created."));

};
