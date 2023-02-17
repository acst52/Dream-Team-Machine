// The following unit tests should ensure that the classes are working as expected 
    // and that any changes to the code don't break the existing functionality

// Note that to run these tests using Jest, first i jest as a dev dependency
  // by running "npm i --save-dev jest" in your project dir's CLI

// In order to test the Employee class, we must first import it:
const Employee = require('./lib/classes');

describe('Employee', () => {
  let employee;

  beforeEach(() => {
    employee = new Employee('Ashley', 1234, 'acst52@test.com');
  });

  it('should return the name of the employee', () => {
    expect(employee.getName()).toEqual('Ashley');
  });

  it('should return the employee ID', () => {
    expect(employee.getId()).toEqual(1234);
  });

  it('should return the employee email', () => {
    expect(employee.getEmail()).toEqual('acst52@test.com');
  });

  it('should return the role of the employee', () => {
    expect(employee.getRole()).toEqual('Employee');
  });

  it('should have values for all properties', () => {
    expect(employee.name.toBe(true));
    expect(employee.id.toBe(true));
    expect(employee.email.toBe(true));
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
