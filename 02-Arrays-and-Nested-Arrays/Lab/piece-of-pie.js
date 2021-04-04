function solve(arr, target1, target2) {
    const startingIndex = arr.indexOf(target1);
    const endIndex = arr.indexOf(target2);
    return arr.slice(startingIndex, endIndex + 1);
}