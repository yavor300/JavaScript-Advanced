const {assert} = require('chai');
const isOddOrEven = require('./isOddOrEven');

describe('isOddOrEven', () => {
    it('returns undefined if the parameter type is not a string', () => {
        assert.isUndefined(isOddOrEven());
    });

    it('returns even if the parameter length is even', () => {
        assert.equal(isOddOrEven('test'), 'even');
    });

    it('returns odd if the parameter length is odd', () => {
        assert.equal(isOddOrEven('abc'), 'odd');
    });
});