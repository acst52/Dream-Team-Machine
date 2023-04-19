// Jest tests

const Manager = require('./lib/classes');

describe('Manager', () => {
    describe('getOfficeNumber', () => {
      it('should return the office number of the manager', () => {
        const manager = new Manager('Ashley', 1234, 'acst52@test.com', 100);
        expect(manager.getOfficeNumber()).toEqual(100);
      });
    });
  
    describe('getRole', () => {
      it('should return the role of the manager', () => {
        const manager = new Manager('Ashley', 1234, 'acst52@test.com', 100);
        expect(manager.getRole()).toEqual('Manager');
      });
    });
  });


// OR:

// describe('Manager', () => {
//     let manager;
  
//     beforeEach(() => {
//       manager = new Manager('Ashley', 1234, 'acst52@test.com', 101);
//     });
  
//     it('should return the name of the manager', () => {
//       expect(manager.getName()).toBe('Ashley');
//     });
  
//     it('should return the id of the manager', () => {
//       expect(manager.getId()).toBe(1234);
//     });
  
//     it('should return the email of the manager', () => {
//       expect(manager.getEmail()).toBe('acst52@test.com');
//     });
  
//     it('should return the office number of the manager', () => {
//       expect(manager.getOfficeNumber()).toBe(101);
//     });
  
//     it('should return the role of the manager', () => {
//       expect(manager.getRole()).toBe('Manager');
//     });
// });
