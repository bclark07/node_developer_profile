const inquirer = require("inquirer");

// const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "color",
        message: "What is your favorite color?"
      }
    ])
    .then(function(data) {
      console.log("Favorite color is " + data.color);
    });
}

promptUser(); //generates the question in the console
