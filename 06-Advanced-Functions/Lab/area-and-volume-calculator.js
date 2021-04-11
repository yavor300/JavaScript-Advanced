function solve(area, vol, input) {
    const result = [];

    const objectArr = JSON.parse(input);
    objectArr.forEach(element => {
        result.push({
            area: area.call(element),
            volume: vol.call(element)
        })
    });


    return result;
}

solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};