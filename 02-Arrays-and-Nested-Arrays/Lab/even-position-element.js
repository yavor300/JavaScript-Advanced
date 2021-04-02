function solve(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result.join(' ');
}

console.log(solve([20, 40, 50]));