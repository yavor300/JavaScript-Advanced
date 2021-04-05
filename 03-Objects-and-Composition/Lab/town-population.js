function solve(arr) {
    const registry = {};

    arr.forEach(el => {
        const tokens = el.split(' <-> ');

        if (registry.hasOwnProperty(tokens[0])) {
            registry[tokens[0]] = registry[tokens[0]] + Number(tokens[1]);
        } else {
            registry[tokens[0]] = Number(tokens[1]);
        }
        
    })

    for (const [key, value] of Object.entries(registry)) {
        console.log(`${key} : ${value}`)
    }
}