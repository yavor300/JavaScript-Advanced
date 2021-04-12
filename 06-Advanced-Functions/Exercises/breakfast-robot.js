function solution() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return manager;

    function manager(command) {
        if (command === 'report') {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        } else {
            const tokens = command.split(' ');
            const commandType = tokens[0];
            const quantity = Number(tokens[2]);

            if (commandType === 'restock') {
                const microelement = tokens[1];
                ingredients[microelement] += quantity;
                return `Success`;
            } else {
                const recipe = tokens[1];
                return prepareRecipe(recipe, quantity);
            }
        }
    }


    function prepareRecipe(recipeName, quantity) {
        if (recipeName === 'apple') {
            if (isIngredientNotAvailable('carbohydrate', quantity)) {
                return `Error: not enough carbohydrate in stock`;
            } else if (isIngredientNotAvailable('flavour', 2 * quantity)) {
                return `Error: not enough flavour in stock`;
            } else {
                ingredients.carbohydrate -= quantity;
                ingredients.flavour -= 2 * quantity;
                return `Success`;
            }
        } else if (recipeName === 'lemonade') {
            if (isIngredientNotAvailable('carbohydrate', 10 * quantity)) {
                return `Error: not enough carbohydrate in stock`;
            } else if (isIngredientNotAvailable('flavour', 20 * quantity)) {
                return `Error: not enough flavour in stock`;
            } else {
                ingredients.carbohydrate -= 10 *quantity;
                ingredients.flavour -= 20 * quantity;
                return `Success`;
            }
        } else if (recipeName === 'burger') {
            if (isIngredientNotAvailable('carbohydrate', 5 * quantity)) {
                return `Error: not enough carbohydrate in stock`;
            } else if (isIngredientNotAvailable('fat', 7 * quantity)) {
                return `Error: not enough fat in stock`;
            } else if (isIngredientNotAvailable('flavour', 3 * quantity)) {
                return `Error: not enough flavour in stock`;
            } else {
                ingredients.carbohydrate -= 5 *quantity;
                ingredients.fat -= 7 * quantity;
                ingredients.flavour -= 3 * quantity;
                return `Success`;
            }
        } else if (recipeName === 'eggs') {
            if (isIngredientNotAvailable('protein', 5 * quantity)) {
                return `Error: not enough protein in stock`;
            } else if (isIngredientNotAvailable('fat', 1 * quantity)) {
                return `Error: not enough fat in stock`;
            } else if (isIngredientNotAvailable('flavour', 1 * quantity)) {
                return `Error: not enough flavour in stock`;
            } else {
                ingredients.protein -= 5 *quantity;
                ingredients.fat -= 1 * quantity;
                ingredients.flavour -= 1 * quantity;
                return `Success`;
            }
        } else {
            if (isIngredientNotAvailable('protein', 10 * quantity)) {
                return `Error: not enough protein in stock`;
            } else if (isIngredientNotAvailable('carbohydrate', 10 * quantity)) {
                return `Error: not enough carbohydrate in stock`;
            } else if (isIngredientNotAvailable('fat', 10 * quantity)) {
                return `Error: not enough fat in stock`;
            } else if (isIngredientNotAvailable('flavour', 10 * quantity)) {
                return `Error: not enough flavour in stock`;
            } 
            else {
                ingredients.carbohydrate -= 10 *quantity;
                ingredients.fat -= 10 * quantity;
                ingredients.flavour -= 10 * quantity;
                ingredients.protein -= 10 * quantity;
                return `Success`;
            }  
        }
    }


    function isIngredientNotAvailable(ingredientName, quantity) {
        return ingredients[ingredientName] < quantity;
    }
}