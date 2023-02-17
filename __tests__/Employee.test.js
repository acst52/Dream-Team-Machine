// The following unit tests should ensure that the classes are working as expected 
    // and that any changes to the code don't break the existing functionality

// Note that to run these tests using Jest, first i jest as a dev dependency
  // by running "npm i --save-dev jest" in your project dir's CLI

// In order to test the Employee class, we must first import it:
const Employee = require('./lib/classes');

describe('Employee', () => {
    describe('getName', () => {
      it('should return the name of the employee', () => {
        const employee = new Employee('John Doe', 1, 'johndoe@test.com');
        expect(employee.getName()).toEqual('John Doe');
      });
    });

// Now let's verify the behavior of each method:
    describe('getId', () => {
      it('should return the ID of the employee', () => {
        const employee = new Employee('John Doe', 1, 'johndoe@test.com');
        expect(employee.getId()).toEqual(1);
      });
    });
  
    describe('getEmail', () => {
      it('should return the email of the employee', () => {
        const employee = new Employee('John Doe', 1, 'johndoe@test.com');
        expect(employee.getEmail()).toEqual('johndoe@test.com');
      });
    });
  
    describe('getRole', () => {
      it('should return the role of the employee', () => {
        const employee = new Employee('John Doe', 1, 'johndoe@test.com');
        expect(employee.getRole()).toEqual('Employee');
      });
    });
  });
  
// To run this test file using Jest, in your CLI, type "npx jest __tests__/Employee.test.js"
  // any failures or errors will be reported in the CLI.

// We can also configure Jest to run all the tests in the "__tests__" directory
  // by adding the following to the package.json file:
// "jest": {
//   "testMatch": [
//     "**/__tests__/*test.js"
//   ]
// }
  // then we can run all Class & assoc method tests by running "npx jest" in our CLI.
