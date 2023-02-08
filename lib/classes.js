// first let's create the parent Employee class with name, id and email properties:
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

// Now let's write out the required methods:
    getName() {
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return 'Employee';
    }
}

// Now we can extend the Employee Class to create the Manager, Engineer and Intern classes:

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
  
    getRole() {
      return 'Manager';
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
}
  
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }
  
    getGithub() {
      return this.github;
    }
  
    getRole() {
      return 'Engineer';
    }
}
  
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
  
    getSchool() {
      return this.school;
    }
  
    getRole() {
      return 'Intern';
    }
}

// Now we can export all the Classes to use in our index.js file:

module.exports = Employee;
module.exports = Manager;
module.exports = Engineer;
module.exports = Intern;
