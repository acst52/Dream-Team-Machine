function generateHTML(employees) {
  // lets iterate through all employees added to the array and make them their own divs:
  employees.forEach((employee) => {

    employeeCard += `
      <div class="card">
        <div class="card-container">
          <h2>${employee.name}</h2>
          <p><strong>ID:</strong> ${employee.id}</p>
          <p><strong>Email:</strong> ${employee.email}</p>
          <p><strong>Role:</strong> ${employee.title}</p>
    `;
    // now let's add the role-specific Q&A to their cards
    if (employee instanceof Manager) {
      employeeCard += `<p class="employee-info">Office Number: ${employee.officeNumber}</p>`;
    } else if (employee instanceof Engineer) {
      employeeCard += `<p class="employee-info">GitHub: ${employee.github}</p>`;
    } else if (employee instanceof Intern) {
      employeeCard += `<p class="employee-info">School: ${employee.school}</p>`;
    }
    employeeCard += `
        </div>
      </div>
    `;
  });
// finally let's add the above to our basic HTML page. Note there is a linked stylesheet,
  // which will be in the same dist dir as the generated index.html
  return `<!DOCTYPE html>
    <html lang="en-US">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Employee Summary</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <header>
          <h1>Meet Our Dream Team!</h1>
        </header>
        <main>
          ${employeeCard}
          </main>
          </body>
        </html>
      `;
}
};
