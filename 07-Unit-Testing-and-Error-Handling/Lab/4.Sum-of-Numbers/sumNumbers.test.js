const sum = require('./sumNumbers');
const {assert} = require('chai');

describe('sum function', () => {
    it('sum() should return the correct sum', () => {
        assert.equal(sum([1, 11]), 12);
    })

    it('sum() should return 0 if the array is empty', () => {
        assert.equal(sum([]), 0);
    });
});