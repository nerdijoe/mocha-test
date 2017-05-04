var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var simple_calc = require('../simple_calc');

describe('Simple Calculator Testing', () => {
  describe('Add', () => {
    // body...
    it('1 + 1 should return 2', () => {
      simple_calc(1,1, '+').should.equal(2);
    });

    it('1+2 should not return other number other than 3', () => {
      simple_calc(1,2,'+').should.not.equal(4);
    });
  });

  describe('Subtract', () => {
    it('1 - 1 should return 0', () => {
      simple_calc(1,1, '-').should.equal(0);
    });

    it('10 - 1 should not return 5', () => {
      simple_calc(10,1, '-').should.not.equal(5);
    });
  });

  describe('Division', () => {
    it('3 / 3 should return 1', () => {
      simple_calc(3,3, '/').should.equal(1);
    });

    it('10 / 2 should not return 3', () => {
      simple_calc(10,2, '/').should.not.equal(3);
    });
  });

  describe('Multiplication', () => {
    it('3 * 3 should return 9', () => {
      simple_calc(3,3,'*').should.equal(9);
    });
    it('4 * 4 should not return 25', () => {
      simple_calc(4,4,'*').should.not.equal(25);
    });
  });

  describe('Exponent', () => {
    it('3 ^ 2 should return 9', () => {
      simple_calc(3,2, '^').should.equal(9);
    });

    it('2 ^ 3 should not return 9', () => {
      simple_calc(2,3, '^').should.not.equal(9);
    });
  });

  describe('Root', () => {
    it('64 root(:) 2 should return 8', () => {
      simple_calc(64,2, ':').should.equal(8);
    });

    it('64 root(:) 2 should not return 3', () => {
      simple_calc(64,2, ':').should.not.equal(3);
    });
  });




  describe('Param operation is invalid', () => {
    it('operation is invalid, should return error message', () => {
      simple_calc(3,3, '$').should.equal("Operation is invalid");
    });

    it('params a is not number, should return error message', () => {
      simple_calc("a",3, '+').should.equal("Please input the correct parameter");
    });

    it('params b is not number, should return error message', () => {
      simple_calc(2,"b", '+').should.equal("Please input the correct parameter");
    });


  });
});
