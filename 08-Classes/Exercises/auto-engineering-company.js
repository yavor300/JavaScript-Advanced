function solve(arr) {
    const autos = new Map();
    

    arr.forEach(car => {
        const tokens = car.split(' | ');

        const brand = tokens[0];
        const model = tokens[1];
        const producedCars = Number(tokens[2]);

        if (autos.has(brand)) {
            const models = autos.get(brand);
            if (models.has(model)) {
                models.set(model, models.get(model) + producedCars);
            } else {
                models.set(model, producedCars);
            }
        } else {
            const models = new Map();
            models.set(model, producedCars);
            autos.set(brand, models);
        }
    });

    for (let [key, value] of autos.entries()) {
        console.log(key);
        for (let [model, quantity] of value.entries()) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}