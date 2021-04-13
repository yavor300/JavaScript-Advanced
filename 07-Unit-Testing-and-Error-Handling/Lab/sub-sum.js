function solve(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end >= arr.length) {
        end = arr.length - 1;
    }

    let result = 0;
    for (let i = start; i <= end; i++) {
        if (isNaN(arr[i])) {
            return NaN;
        }
        result += arr[i];
    }
    
    return result;
}