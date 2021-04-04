function solve(arr) {
    arr.sort((f, s) => f - s);
    const result = [];

    while (arr.length) {
        result.push(arr.shift());
        result.push(arr.pop());
    }
    
    return result;
}