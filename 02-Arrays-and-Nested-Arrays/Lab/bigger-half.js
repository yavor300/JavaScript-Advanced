function solve(arr) {
    arr.sort((f, s) => f - s);

    if (arr.length % 2 === 0) {
        arr.splice(0, arr.length / 2);
        return arr;
    }
    
    arr.splice(0, Math.floor(arr.length / 2));
    return arr;
}