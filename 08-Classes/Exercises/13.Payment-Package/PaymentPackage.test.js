const {assert} = require('chai');
const PaymentPackage = require('./PaymentPackage');

describe('constructor', () => {
    it('throws an error if the name is not a string', () => {
        assert.throws(() => new PaymentPackage(0, 0), Error);
    });

    it('throws an error if the name length is 0', () => {
        assert.throws(() => new PaymentPackage('', 0), Error);
    });

    it('throws an error if the value is not a number', () => {
        assert.throws(() => new PaymentPackage('valid', ''), Error('Value must be a non-negative number'));
    });

    it('throws an error if the value is less than 0', () => {
        assert.throws(() => new PaymentPackage('valid', -1), Error);
    });

    it('set name correctly', () => {
        const paymentPackage = new PaymentPackage('name', 1);
        assert.equal(paymentPackage.name, 'name');
    });

    it('set value correctly', () => {
        const paymentPackage = new PaymentPackage('name', 1);
        assert.equal(paymentPackage.value, 1);
    });

    it('set value correctly if 0', () => {
        const paymentPackage = new PaymentPackage('name', 0);
        assert.equal(paymentPackage.value, 0);
    });

    it('set VAT correctly', () => {
        const paymentPackage = new PaymentPackage('name', 1);
        assert.equal(paymentPackage.VAT, 20);
    });

    it('set active correctly', () => {
        const paymentPackage = new PaymentPackage('name', 1);
        assert.equal(paymentPackage.active, true);
    });
});

describe('set VAT', () => {
    it('throws an error if the VAT is not a number', () => {
        assert.throws(() => {
            new PaymentPackage('name', 0).VAT = 'string';
        }, Error);
    });

    it('throws an error if the VAT is less than 0', () => {
        assert.throws(() => {
            new PaymentPackage('name', 0).VAT = -1;
        }, Error);
    });

    it('works correctly', () => {
        const paymentPackage = new PaymentPackage('name', 1);
        paymentPackage.VAT = 10;
        assert.equal(paymentPackage.VAT, 10);
    });
});

describe('set active', () => {
    it('throws an error if the active is not a boolean', () => {
        assert.throws(() => {
            new PaymentPackage('name', 0).active = 'string';
        }, Error);
    });

    it('works correctly', () => {
        const paymentPackage = new PaymentPackage('name', 1);
        paymentPackage.active = false;
        assert.equal(paymentPackage.active, false);
    });
});

describe('toString', () => {
    it('returns a correct string when active is true', () => {
        const paymentPackage = new PaymentPackage('HR Services', 1500);
        assert.equal(paymentPackage.toString(), 'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
    }); 

    it('returns a correct string when active is false', () => {
        const paymentPackage = new PaymentPackage('HR Services', 1500);
        paymentPackage.active = false;
        assert.equal(paymentPackage.toString(), 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
    }); 
});