class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length + 1 > this.capacity) {
            throw new Error('Not enough parking space.');
        }
        this.vehicles.push({carModel, carNumber, payed: false});

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let exists = false;
        let carIndex = -1;

        this.vehicles.forEach((vehicle, index) => {
            if (vehicle.carNumber === carNumber) {
                exists = true;
                carIndex = index;
            }
        });

        if (!exists) {
            throw new Error(`The car, you're looking for, is not found.`);
        } else if (!this.vehicles[carIndex].payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles.splice(carIndex, 1);
        return `${carNumber} left the parking lot.`;
    }

    pay(carNumber) {
        let exists = false;
        let car;
        this.vehicles.forEach((vehicle) => {
            if (vehicle.carNumber === carNumber) {
                exists = true;
                car = vehicle;
            }
        });

        if (!exists) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        } else if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            let result = `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`;
            this.vehicles.sort((f, s) => f.carModel.localeCompare(s.carModel));
            this.vehicles.forEach(vehicle => {
                result += `${vehicle.carModel} == ${vehicle.carNumber} - `;
                if (vehicle.payed) {
                    result += `Has payed\n`;
                } else {
                    result += `Not payed\n`;
                }
            });

            return result.trim();
        } else {
            let car;
            this.vehicles.forEach((vehicle) => {
                if (vehicle.carNumber === carNumber) {
                    car = vehicle;
                }
            });
            let result;
            result += `${car.carModel} == ${car.carNumber} - `;
            if (car.payed) {
                result += `Has payed\n`;
            } else {
                result += `Not payed\n`;
            }
            return result.trim();
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("bolvo t600", "TX3691CA"));
console.log(parking.addCar("aolvo t600", "TX3691CA"));
console.log(parking.getStatistics());
