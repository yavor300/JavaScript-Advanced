const {assert} = require('chai');
const createCalculator = require('./addSubtract');

describe('createCalculator', () => {
    it('returns an object containing three functions', () => {
        const functions = ['add', 'subtract', 'get'];

        let rightFunctionNames = true;
        let areFunctions = true;

        const result = createCalculator();
        for (const [key, value] of Object.entries(result)) {
            if (!functions.includes(key)) {
                rightFunctionNames = false;
                break;
            }
            if (typeof value !== 'function') {
                areFunctions = false;
                break;
            }
        }

        assert.isTrue((rightFunctionNames && areFunctions));
    });

    it('adds a number to the prive value', () => {
        const result = createCalculator();
        result.add(1);
        assert.equal(result.get(), 1);
    });

    it('adds a string to the prive value', () => {
        const result = createCalculator();
        result.add('1');
        assert.equal(result.get(), 1);
    });

    it('subtracts a number from the prive value', () => {
        const result = createCalculator();
        result.subtract(1);
        assert.equal(result.get(), -1);
    });

    it('subtracts a string from the prive value', () => {
        const result = createCalculator();
        result.subtract('1');
        assert.equal(result.get(), -1);
    });

    it('returns the value of the private sum', () => {
        const result = createCalculator();
        assert.equal(result.get(), 0);
    });


    it("returns the correct result after multiple operations 10 - 7 - 2 + 1 = 2", () => {
        const calc = createCalculator();
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        assert.equal(calc.get(), 2);
    });
});