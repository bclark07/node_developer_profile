const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

const generateHTML = require("./generateHTML");

const writeFileAsync = util.promisify(fs.writeFile);
const info = {};

function promptUser() {
  return inquirer
    .prompt([
      {
        type: "rawlist",
        name: "color",
        message: "What is your favorite color?",
        choices: ["green", "blue", "pink", "red"]
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      }
    ])
    .then(function(data) {
      console.log("Favorite color is " + data.color);
      info.color = data.color;
      // const queryUrl1 = `https://api.github.com/users/${data.github}/repos`;
      // axios.get(queryUrl1).then(function(res) {
      //   //Number of GitHub stars - not the right data point
      //   info.stars = res.data.map(function(ans) { //maps it to an array within the object
      //     return ans.watchers;
      //   });
      //   console.log(info);
      // });

      const queryUrl2 = `https://api.github.com/users/${data.github}`;
      axios.get(queryUrl2).then(function(res) {
        info.img = res.data.avatar_url; //profile image
        info.name = res.data.name; //users name
        info.company = res.data.company;
        info.location = res.data.location; //change with User location via Google Maps (link)?
        info.html_url = res.data.html_url; //html page?
        info.blog = res.data.blog; //link to blog
        info.bio = res.data.bio; //bio from profile
        info.repos = res.data.public_repos; //Number of public repositories
        info.followers = res.data.followers; //Number of followers
        info.gists = res.data.public_gists;
        info.following = res.data.following; //Number person is following

        console.log(info);
        const html = generateHTML(info);
        return writeFileAsync("index.html", html);
      });
    });
}

promptUser();
