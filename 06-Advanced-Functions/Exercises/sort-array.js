function solve(arr, type) {
    
    if (type === 'asc') {
        return arr.sort(ascendingSort);
    } else {
        return arr.sort(descendingSort);
    }

    function descendingSort(a, b) {
        return b - a;
    }

    function ascendingSort(a, b) {
        return a - b;
    }
}

//[14, 7, 17, 6, 8], 'asc' -> [6, 7, 8, 14, 17]