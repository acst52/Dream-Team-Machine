const { Intern } = require('../lib/classes');

describe('Intern', () => {
    describe('getSchool', () => {
      it('should return the school of the intern', () => {
        const intern = new Intern('Ashley', 1234, 'acst52@test.com', 'Carleton U');
        expect(intern.getSchool()).toEqual('Carleton U');
      });
    });
  
    describe('getRole', () => {
      it('should return the role of the intern', () => {
        const intern = new Intern('Ashley', 1234, 'acst52@test.com', 'Carleton U');
        expect(intern.getRole()).toEqual('Intern');
      });
    });
  });
  
