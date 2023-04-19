// In order to test the Employee class, we must first import it:
  // bc classes are all in one file and exported together, they needed to be destructured for import. This is why the tests were not running!
const { Employee } = require('../lib/classes');

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
    expect(employee.name).toBeTruthy();
    expect(employee.id).toBeTruthy();
    expect(employee.email).toBeTruthy();
  });
});
