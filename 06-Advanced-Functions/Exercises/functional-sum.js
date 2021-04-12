function add(num) {
    let number = num;

    function increment(num2) {
        number += num2;
        return increment;
    }

    increment.toString = function() {
        return number;
    }

    return increment;
}

console.log(add(1)(6)(-3));
