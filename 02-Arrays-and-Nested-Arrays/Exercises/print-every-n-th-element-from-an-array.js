function solve(arr, n) {
    return arr.filter((el, i) => i % n === 0);
}