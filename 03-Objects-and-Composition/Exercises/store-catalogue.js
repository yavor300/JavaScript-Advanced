function solve(arr) {
    arr.sort();
    
    const registry = {};

    arr.forEach(element => {
        const tokens = element.split(' : ');

        if (registry.hasOwnProperty(tokens[0].charAt(0))) {
            registry[tokens[0].charAt(0)].push({name: tokens[0], price: Number(tokens[1])});
        } else {
            registry[tokens[0].charAt(0)] = [{name:tokens[0], price: Number(tokens[1])}];
        }
    });

    for (const [key, value] of Object.entries(registry)) {
        console.log(key);
        value.forEach(p => {
            console.log(`  ${p.name}: ${p.price}`)
        });
    }
}