const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");const employeesArr =[]
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function makeChart(){
  fs.writeFile(outputPath, render(employeesArr), err=>{
    if (err) throw err
    console.log("file written")
  })
}
function makeEngineer() {

    
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID Number?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
      },
    ]).then(results=>{
      const newEngineer = new Engineer(results.name, results.id, results.email, results.username)
    employeesArr.push(newEngineer)
    makeTeam()
    })
    };

    
function makeIntern() {
  var inquirer = require("inquirer");
  var fs = require('fs');
  
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID Number?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "school",
      message: "What school did you attend?"
    }
  ]).then(results=>{
    const newIntern = new Intern(results.name, results.id, results.email, results.school)
  employeesArr.push(newIntern)
  makeTeam()
  })
  };


  
function makeManager() {

  
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your ID Number?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?"
    }
  ]).then(results=>{
    const newManager = new Manager(results.name, results.id, results.email, results.office)
    employeesArr.push(newManager)
    makeTeam()
  })
  };

  function makeTeam (){
    inquirer.prompt([
      {
        type: "list",
        name: "typeOfEmployee",
        message: "What type of employee would you like to add?",
        choices:["Engineer", "Intern", "Done adding employees"]
      }
    ]).then(selection=>{
      switch(selection.typeOfEmployee){
        case "Engineer":
          makeEngineer();
        break;
        case "Intern":
          makeIntern();
        break;
        default:
          makeChart();
      }
    })
  }

  makeManager()