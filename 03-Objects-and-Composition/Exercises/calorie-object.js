function solve(arr) {
    const result = {};

    for (let i = 0; i < arr.length - 1; i++) {
        result[arr[i]] = Number(arr[i + 1]);
        i++;
    }
    return result;
} 

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));