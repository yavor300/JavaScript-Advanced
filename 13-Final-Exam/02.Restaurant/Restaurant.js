class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        let result = ``;

        products.forEach(p => {
            const productTokens = p.split(' ');

            const productName = productTokens[0];
            const productQuantity = Number(productTokens[1]);
            const productTotalPrice = Number(productTokens[2]);

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                }
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        this.history.forEach(e => {
            result += `${e}\n`;
        })

        return result;
    }

    addToMenu(meal, neededProducts, price) {
        const products = [];

        neededProducts.forEach(p => {
            const neededProductsTokens = p.split(' ');

            const productName = neededProductsTokens[0];
            const productQuantity = Number(neededProductsTokens[1]);

            products.push({productName, productQuantity});
        })

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {products, price};

            if (Object.keys(this.menu).length === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        let result = '';
        for (const [key, value] of Object.entries(this.menu)) {
            result += `${key} - $ ${value.price}\n`;
        }
        return result.trim();
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let areProductsAvailable = true;

        const requiredProducts = this.menu[meal].products;

        requiredProducts.forEach(rp => {
            const requiredProductName = rp.productName;
            const requiredProductCount = rp.productQuantity;

            if (!this.stockProducts.hasOwnProperty(requiredProductName) ||
            this.stockProducts[requiredProductName] < requiredProductCount) {
                areProductsAvailable = false;
            }
        });

        if (!areProductsAvailable) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        } else {
            const requiredProducts = this.menu[meal].products;

            requiredProducts.forEach(rp => {
                const requiredProductName = rp.productName;
                const requiredProductCount = rp.productQuantity;

                this.stockProducts[requiredProductName] -= requiredProductCount;
            });

            this.budgetMoney += this.menu[meal].price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        }
    }
}

let kitchen = new Restaurant(1000);

console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());

kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.makeTheOrder('frozenYogurt'));

