const {assert} = require('chai');
const lookupChar = require('./charLookUp');

describe('lookupChar', () => {
    it('returns undefined if the first parameter is not a string', () => {
        assert.isUndefined(lookupChar(1, 1));
    });

    it('returns undefined if the second parameter is not a number', () => {
        assert.isUndefined(lookupChar('string', '1'));
    });

    it('returns undefined if the the second parameter is floating point number', () => {
        assert.isUndefined(lookupChar('string', 2.1));
    });

    it('returns "Incorrect index" if the index is bigger than the string length', () => {
        assert.equal(lookupChar('string', 9), 'Incorrect index');
    });

    it('returns "Incorrect index" if the index is equal to the string length', () => {
        assert.equal(lookupChar('string', 6), 'Incorrect index');
    });

    it('returns "Incorrect index" if the index is a negative number', () => {
        assert.equal(lookupChar('string', -1), 'Incorrect index');
    });

    it('returns the character at the specified index in the string', () => {
        assert.equal(lookupChar('string', 0), 's');
    });

    it('returns the character at the specified index in the string', () => {
        assert.equal(lookupChar('string', 1), 't');
    });
});