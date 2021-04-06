function rectangle(width, height, color) {
    const rectangle = {width, height, color: color.charAt(0).toUpperCase() + color.slice(1)};

    rectangle.calcArea = () => {
        return rectangle.width * rectangle.height;
    };

    return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
