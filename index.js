const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer
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
      const fav_color = data.color;

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
        // console.log(prof_img);
        // console.log(username);
        // console.log(blog);
        // console.log(bio);
        // console.log(repos);
        // console.log(followers);
        // // console.log(stars);
        // console.log(following);
      });
    });
}

const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

// <img class="photo-header img src=${answers.prof_img}/>
function generateHTML(answers) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
      @page {
        margin: 0;
      }
     *,
     *::after,
     *::before {
     box-sizing: border-box;
     }
     html, body {
     padding: 0;
     margin: 0;
     }
     html, body, .wrapper {
     height: 100%;
     }
     .wrapper {
     background-color: ${colors[answers.color].wrapperBackground};
     padding-top: 100px;
     }
     body {
     background-color: white;
     -webkit-print-color-adjust: exact !important;
     font-family: 'Cabin', sans-serif;
     }
     main {
     background-color: #E9EDEE;
     height: auto;
     padding-top: 30px;
     }
     h1, h2, h3, h4, h5, h6 {
     font-family: 'BioRhyme', serif;
     margin: 0;
     }
     h1 {
     font-size: 3em;
     }
     h2 {
     font-size: 2.5em;
     }
     h3 {
     font-size: 2em;
     }
     h4 {
     font-size: 1.5em;
     }
     h5 {
     font-size: 1.3em;
     }
     h6 {
     font-size: 1.2em;
     }
     .photo-header {
     position: relative;
     margin: 0 auto;
     margin-bottom: -50px;
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
     background-color: ${colors[answers.color].headerBackground};
     color: ${colors[answers.color].headerColor};
     padding: 10px;
     width: 95%;
     border-radius: 6px;
     }
     .photo-header img {
     width: 250px;
     height: 250px;
     border-radius: 50%;
     object-fit: cover;
     margin-top: -75px;
     border: 6px solid ${colors[answers.color].photoBorderColor};
     box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
     }
     .photo-header h1, .photo-header h2 {
     width: 100%;
     text-align: center;
     }
     .photo-header h1 {
     margin-top: 10px;
     }
     .links-nav {
     width: 100%;
     text-align: center;
     padding: 20px 0;
     font-size: 1.1em;
     }
     .nav-link {
     display: inline-block;
     margin: 5px 10px;
     }
     .workExp-date {
     font-style: italic;
     font-size: .7em;
     text-align: right;
     margin-top: 10px;
     }
     .container {
     padding: 50px;
     padding-left: 100px;
     padding-right: 100px;
     }

     .row {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       margin-top: 20px;
       margin-bottom: 20px;
     }

     .card {
       padding: 20px;
       border-radius: 6px;
       background-color: ${colors[answers.color].headerBackground};
       color: ${colors[answers.color].headerColor};
       margin: 20px;
     }
     
     .col {
     flex: 1;
     text-align: center;
     }

     a, a:hover {
     text-decoration: none;
     color: inherit;
     font-weight: bold;
     }

     @media print { 
      body { 
        zoom: .75; 
      } 
     }
  </style>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container photo-header">
    Here we are It is a big day!
   
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
      </body>
      </html>`;
}

// promptUser(); //generates the question in the console

//have to extend from other document?

promptUser()
  .then(function(answers) {
    console.log(answers);
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });
