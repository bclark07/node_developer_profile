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
    // const queryUrl = `https://api.github.com/users/${data.github}/repos?per_page=100`;

    const queryUrl = `https://api.github.com/users/${data.github}`;
    axios.get(queryUrl).then(function(res) {
      const prof_img = res.data.avatar_url; //profile image
      const username = res.data.login; //github username
      // const location =  res.data.location; User location via Google Maps (link)
      // const = User GitHub profile (link)
      const blog = res.data.blog; //link to blog
      const bio = res.data.bio; //bio from profile
      const repos = res.data.public_repos; //Number of public repositories
      const followers = res.data.followers; //Number of followers
      // const stars = res.data.public_gists; //Number of GitHub stars - this is not right - may have to create array from other git request and get length of it
      const following = res.data.following; //Number person is following
      
      //anvaka should have 54 stars
      console.log(prof_img);
      console.log(username);
      console.log(blog);
      console.log(bio);
      console.log(repos);
      console.log(followers);
      // console.log(stars);
      console.log(following);
    });
  });
// }

// promptUser(); //generates the question in the console
