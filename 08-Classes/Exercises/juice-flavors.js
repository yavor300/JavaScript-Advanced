function solve(arr) {
    const juiceQuantity = new Map();
    const juiceBottles = new Map();

    arr.forEach(juice => {
        const tokens = juice.split(' => ');
        const name = tokens[0];
        const quantity = Number(tokens[1]);
        
        if (juiceQuantity.has(name)) {
            juiceQuantity.set(name, juiceQuantity.get(name) + quantity);
        } else {
            juiceQuantity.set(name, quantity);
        }

        const bottles = Math.floor(juiceQuantity.get(name) / 1000);
        if (bottles >= 1) {
            if (juiceBottles.has(name)) {
                juiceBottles.set(name, juiceBottles.get(name) + bottles);
            } else {
                juiceBottles.set(name, bottles);
            }
        }

        juiceQuantity.set(name, juiceQuantity.get(name) - 1000 * bottles);
    });

    for (let [key, value] of juiceBottles.entries()) {
        console.log(`${key} => ${value}`)
    }
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);