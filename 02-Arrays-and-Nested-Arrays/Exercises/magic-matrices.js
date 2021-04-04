function solve(matrix) {
    let sum = [];

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        let col = [];

        for (let j = 0; j < matrix.length; j++) {
            col.push(matrix[j][i]);
        }

        if (!areSumsEqual(row, col, sum)) {
            return false;
        }

    }
    return true;


    function areSumsEqual(row, col, sum) {
        let rowSum = row.reduce((acc, c) => acc + c);
        let colSum = col.reduce((acc, c) => acc + c);

        if (sum.length === 0) {
            sum.push(rowSum);
        }

        if (rowSum !== colSum) {
            return false;
        } else {
            if (sum[0] !== rowSum) {
                return false;
            }
        }

        return true;
    }
}


console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]      
   ));