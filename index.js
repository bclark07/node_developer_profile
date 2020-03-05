const inquirer = require("inquirer");
const axios = require("axios");

// const writeFileAsync = util.promisify(fs.writeFile);

// function promptUser() {
//   return
inquirer
  .prompt([
    {
      type: "input",
      name: "color",
      message: "What is your favorite color?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    }
  ])
  .then(function(data) {
    console.log("Favorite color is " + data.color);
    const queryUrl = `https://api.github.com/users/${data.github}/repos?per_page=100`;
    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

      console.log(`Saved ${repoNamesStr} repos`);
    });
    //get this from GitHUb:
    //       - Profile image
    // - User name
    // - Links to the following:
    //   - User location via Google Maps
    //   - User GitHub profile
    //   - User blog
    // - User bio
    // - Number of public repositories
    // - Number of followers
    // - Number of GitHub stars
    // - Number of users following
  });
// }

// promptUser(); //generates the question in the console
