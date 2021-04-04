function solve(arr) {
    const result = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= result[result.length - 1]) {
            result.push(arr[i]);
        }
    }

    return result;
}