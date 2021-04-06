function solve(arr) {
    const registry = {};

    arr.forEach(element => {
        const tokens = element.split(' | ');
    
        if (registry.hasOwnProperty(tokens[1])) {
            if (registry[tokens[1]].price > Number(tokens[2])) {
                registry[tokens[1]].town = tokens[0];
                registry[tokens[1]].price = Number(tokens[2]);
            }
        } else {
            registry[tokens[1]] = {
                town: tokens[0],
                price: Number(tokens[2])
            }
        }
    });

    for (const [key, value] of Object.entries(registry)) {
        console.log(`${key} -> ${value.price} (${value.town})`)
    }
}