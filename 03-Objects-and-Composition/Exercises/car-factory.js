function solve(car) {
    const result = {model: car.model};

    if (car.power > 0 && car.power <= 90) {
        result.engine = { power: 90, volume: 1800 };
    } else if (car.power > 90 && car.power <= 120) {
        result.engine = { power: 120, volume: 2400 };
    } else {
        result.engine = { power: 200, volume: 3500 };
    }

    if (car.carriage === 'hatchback') {
        result.carriage = { type: 'hatchback', color: car.color };
    } else {
        result.carriage = { type: 'coupe', color: car.color };
    }

    if (car.wheelsize % 2 === 0) {
        car.wheelsize = car.wheelsize - 1;
    }

    const wheels = [];
    for (let i = 0; i < 4; i++) {
        wheels.push(car.wheelsize);
    }

    result.wheels = wheels;

    return result;
}