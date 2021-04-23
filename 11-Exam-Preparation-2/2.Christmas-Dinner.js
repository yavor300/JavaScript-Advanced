class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping(productInfo) {
        if (this.budget < productInfo[1]) {
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(productInfo[0]);
        this.budget = this.budget - productInfo[1];
        return `You have successfully bought ${productInfo[0]}!`;
    }

    recipes(recipe) {
        const recipeName = recipe.recipeName;
        const productsList = recipe.productsList;

        const checker = (arr, target) => target.every(el => arr.includes(el));

        if (checker(this.products, productsList)) {
            this.dishes.push(recipe);
            return `${recipeName} has been successfully cooked!`;
        } else {
            throw new Error('We do not have this product');
        }
    }

    inviteGuests(name, dish) {
        const foundDish = this.dishes.find(d => d.recipeName === dish);
        const foundGuest = this.guests.hasOwnProperty(name);

        if (!foundDish) {
            throw new Error('We do not have this dish');
        }

        if (foundGuest) {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = '';
        for (let [key, value] of Object.entries(this.guests)) {
            const guestDishObject = this.dishes.find(d => d.recipeName === value);
            result += `${key} will eat ${value}, which consists of ${guestDishObject.productsList.join(', ')}\n`;
        }
        return result.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

