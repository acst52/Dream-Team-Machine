// lets generate the HTML code with employee-specific cards:
const generateTeam = (team) => {
    const managerCard = manager => {
      return `
      <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
      `
    }

    const engineerCard = engineer => {
      return `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
          </ul>
      </div>
      </div>
      `
    }

    const internCard = intern => {
      return `
      <div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${intern.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
  </div>
      `
    }
  
// sort thru diff employees: filter through employees, map Role for each, push to html so they are in order
const html = [];
html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => managerCard(manager))
);
html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => engineerCard(engineer))
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => internCard(intern))
);
return html.join('');
};

// export this helper fcn so we can import into our main script; inside return basic HTML structure to file
module.exports = team => {
  return `
  <!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Employee Summary</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 p-5 mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team-area col-12 d-flex justify-content-center">
                  ${generateTeam(team)}
              </div>
          </div>
      </div>
  </body>
  </html>
  `
};
