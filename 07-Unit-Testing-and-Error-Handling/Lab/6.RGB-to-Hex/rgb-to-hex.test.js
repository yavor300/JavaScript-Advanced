const {assert} = require('chai');
const rgbToHexColor = require('./rgb-to-hex');

describe('rgbToHexColor', () => {
    it('returns undefined if red is invalid', () => {
        assert.isUndefined(rgbToHexColor('red', 100, 100));
    });

    it('returns undefined if greem is invalid', () => {
        assert.isUndefined(rgbToHexColor(100, 256, 100));
    });

    it('returns undefined if greem is invalid', () => {
        assert.isUndefined(rgbToHexColor(100, 255, -1));
    });

    it('returns the correct color hex', () => {
        assert.equal(rgbToHexColor(255, 158, 170), '#FF9EAA');
    });

    it('converts black to hex', () => {
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    });

    it('converts white to hex', () => {
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });

    it('converts red to hex', () => {
        assert.equal(rgbToHexColor(255, 0, 0), '#FF0000');
    });

    it('converts green to hex', () => {
        assert.equal(rgbToHexColor(0, 255, 0), '#00FF00');
    });

    it('converts blue to hex', () => {
        assert.equal(rgbToHexColor(0, 0, 255), '#0000FF');
    });

    it('returns undefined if params are strings', () => {
        assert.isUndefined(rgbToHexColor('a', 'a', 'a'));
    });
});