const {assert} = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer.addFive', () => {
    it('returns undefined if the parameter is not a number', () => {
        assert.isUndefined(mathEnforcer.addFive(''));
    });

    it('returns the correct result', () => {
        assert.equal(mathEnforcer.addFive(1), 6);
    });

    it('returns the correct result with negative number', () => {
        assert.equal(mathEnforcer.addFive(-1), 4);
    });

    it('returns the correct result with floating point number', () => {
        assert.equal(mathEnforcer.addFive(2.2), 7.2);
    });
});

describe('mathEnforcer.subtractTen', () => {
    it('returns undefined if the parameter is not a number', () => {
        assert.isUndefined(mathEnforcer.subtractTen(''));
    });

    it('returns the correct result', () => {
        assert.equal(mathEnforcer.subtractTen(0), -10);
    });

    it('returns the correct result with a negative number', () => {
        assert.equal(mathEnforcer.subtractTen(-10), -20);
    });

    it('returns the correct result with floating point number', () => {
        assert.equal(mathEnforcer.subtractTen(-2.2), -12.2);
    });
});

describe('mathEnforcer.sum', () => {
    it('returns undefined if the first parameter is not a number', () => {
        assert.isUndefined(mathEnforcer.sum('' , 1));
    });

    it('returns undefined if the second parameter is not a number', () => {
        assert.isUndefined(mathEnforcer.sum(1 , ''));
    });

    it('returns undefined if the both parameters are not numbers', () => {
        assert.isUndefined(mathEnforcer.sum('' , ''));
    });

    it('returns the correct result', () => {
        assert.equal(mathEnforcer.sum(1, 2), 3);
    });

    it('returns the correct result with floating point number', () => {
        assert.equal(mathEnforcer.sum(1.1, 2), 3.1);
    });

    it('returns the correct result with floating point number', () => {
        assert.equal(mathEnforcer.sum(2, 1.1), 3.1);
    });
});