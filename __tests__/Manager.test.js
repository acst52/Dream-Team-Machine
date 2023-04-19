const { Manager } = require('../lib/classes');

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
