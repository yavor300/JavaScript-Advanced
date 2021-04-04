function solve(matrix) {
    let primary = 0;
    let secondary = 0;

    for (let row = 0; row < matrix.length; row++) {
        primary += matrix[row][row];
        secondary += matrix[row][matrix[row].length - 1 - row];  
    }

    console.log(`${primary} ${secondary}`);
}

solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);
