// Jest tests

const Engineer = require('./lib/classes');

describe('Engineer', () => {
    describe('getGithub', () => {
      it('should return the GitHub username of the engineer', () => {
        const engineer = new Engineer('Ashley', 1234, 'acst52@test.com', 'acst52');
        expect(engineer.getGithub()).toEqual('acst52');
      });
    });
  
    describe('getRole', () => {
      it('should return the role of the engineer', () => {
        const engineer = new Engineer('Ashley', 1234, 'acst52@test.com', 'acst52');
        expect(engineer.getRole()).toEqual('Engineer');
      });
    });
  });
