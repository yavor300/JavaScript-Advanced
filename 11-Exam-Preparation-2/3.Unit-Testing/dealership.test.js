// euroCategory: function (category) {
//     if (category >= 4) {
//         let price = this.newCarCost('Audi A4 B8', 30000);
//         let total = price - (price * 0.05)
//         return `We have added 5% discount to the final price: ${total}.`;
//     } else {
//         return 'Your euro category is low, so there is no discount from the final price!';
//     }
// }

const dealership = require('./dealership');
const {assert} = require('chai');

describe('newCarCost', function () {
    it('should deduct money if the oldCarModel exists in the object', function () {
        const result = dealership.newCarCost('Audi A4 B8', 20000);
        assert.equal(5000, result);
    });

    it('should not deduct money if the oldCarModel does not exist in the object', function () {
        const result = dealership.newCarCost('Tesla Model X', 70000);
        assert.equal(70000, result);
    });
});

describe('carEquipment', function () {
    it('should retutn an array with all selected extras', function () {
        const result = dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 3]);
        assert.equal('heated seats', result[0]);
        assert.equal('navigation', result[1]);
    });
});

describe('euroCategory', function () {
    it('should give discount if the category equals 4', function () {
        const result = dealership.euroCategory(4);
        assert.equal('We have added 5% discount to the final price: 14250.', result)
    });

    it('should give discount if the category is greater than 4', function () {
        const result = dealership.euroCategory(5);
        assert.equal('We have added 5% discount to the final price: 14250.', result)
    });

    it('should not give discount if the category is less than 4', function () {
        const result = dealership.euroCategory(3);
        assert.equal('Your euro category is low, so there is no discount from the final price!', result)
    });
});
