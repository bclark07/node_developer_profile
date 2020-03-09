function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" />
        <title>${data.name} Resume</title>
        
     </head>
     <body>
        <div class="wrapper">
           <div class="photo-header">
              <img src="${data.img}" alt="Photo of ${data.name}" />
              <h1>Hi,</h1>
              <h2>
              My name is ${data.name}</h1>
              <h5>${data.company ? `Currently @ ${data.company}` : ""}</h5>
              <nav class="links-nav">
                 ${
                   data.location
                     ? `<a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/${data.location}"><i class="fas fa-location-arrow"></i> ${data.location}</a>`
                     : ""
                 }
                 <a class="nav-link" target="_blank" rel="noopener noreferrer" href="${
                   data.html_url
                 }"><i class="fab fa-github-alt"></i> GitHub</a>
                 ${
                   data.blog
                     ? `<a class="nav-link" target="_blank" rel="noopener noreferrer" href="${data.blog}"><i class="fas fa-rss"></i> Blog</a>`
                     : ""
                 }
              </nav>
           </div>
           <main>
              <div class="container">
              <div class="row">
                 <div class="col">
                    <h3>${data.bio ? `${data.bio}` : ""}</h3>
                 </div>
                 </div>
                 <div class="row">
                 <div class="col">
                    <div class="card">
                      <h3>Public Repositories</h3>
                      <h4>${data.repos}</h4>
                    </div>
                 </div>
                  <div class="col">
                  <div class="card">
                    <h3>Followers</h3>
                    <h4>${data.followers}</h4>
                  </div>
                 </div>
                 </div>
                 <div class="row">
                 <div class="col">
                 <div class="card">
                    <h3>GitHub Gists</h3>
                    <h4>${data.gists}</h4>
                    </div>
                 </div>
                  <div class="col">
                  <div class="card">
                    <h3>Following</h3>
                    <h4>${data.following}</h4>
                    </div>
                 </div>
                 </div>
              </div>
           </main>
        </div>
     </body>
  </html>`;
}

module.exports = generateHTML;
