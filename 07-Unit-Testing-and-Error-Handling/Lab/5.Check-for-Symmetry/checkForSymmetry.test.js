const {assert} = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('isSymmetric tests', () => {
    it('false should be returned if non-array is passed as argument', () => {
        assert.isFalse(isSymmetric());
    });

    it('false should be returned if the arrays are not symmetric', () => {
        assert.isFalse(isSymmetric([1, 2, 3]));
    });

    it('true should be returned if the arrays are symmetric', () => {
        assert.isTrue(isSymmetric([1, 1, 1]));
    });

    it('true should be returned if the arrays are empty', () => {
        assert.isTrue(isSymmetric([]));
    });

    it('true should be returned if the arrays are symmetric strings', () => {
        assert.isTrue(isSymmetric(['a', 'a', 'a']));
    });

    it('false should be returned for elements with different data type', () => {
        assert.isFalse(isSymmetric(['1', 1]));
    });
});
