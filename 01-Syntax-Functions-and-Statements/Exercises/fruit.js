function solve(fruit, weight, price) {
    const kilos = weight / 1000;
    const sum = price * kilos;
    console.log(`I need $${sum.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}