const testNumbers = require('./testNumbers.js');
const {assert} = require('chai');

describe('sumNumbers', function () {
    it('should return undefined if num1 is not a number', function () {
        const result = testNumbers.sumNumbers('a', 2);
        assert.equal(undefined, result);
    });

    it('should return undefined if num2 is not a number', function () {
        const result = testNumbers.sumNumbers(2, 'a');
        assert.equal(undefined, result);
    });

    it('should return undefined if num1 and num2 are not numbers', function () {
        const result = testNumbers.sumNumbers('a', 'a');
        assert.equal(undefined, result);
    });

    it('should return the sum of whole numbers', function () {
        const result = testNumbers.sumNumbers(2, 2);
        assert.equal(4.00, result);
    });

    it('should return the sum of decimal numbers', function () {
        const result = testNumbers.sumNumbers(2.2, 2.2);
        assert.equal(4.40, result);
    });
});

describe('numberChecker', function () {
    it('should throw an error if NaN', function () {
        assert.throw(() => testNumbers.numberChecker('s'));
    });


    it('should return correct message if the number is even', function () {
        const result = testNumbers.numberChecker(2);
        assert.equal('The number is even!', result);
    });

    it('should return correct message if the number is odd', function () {
        const result = testNumbers.numberChecker(3);
        assert.equal('The number is odd!', result);
    });
});


describe('averageSumArray', function () {
    it('should return correctly', function () {
        const result = testNumbers.averageSumArray([6, 6, 6]);
        assert.equal(6, result);
    });
});

