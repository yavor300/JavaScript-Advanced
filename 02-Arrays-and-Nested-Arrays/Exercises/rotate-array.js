function solve(arr, r) {
    for (let i = 0; i < r; i++) {
        let el = arr.pop();
        arr.unshift(el);
    }
    return arr.join(' ');
}