function solve(arr) {
    arr.sort((f, s) => {
     let firstComparison = f.length - s.length;

     if (firstComparison === 0) {
         return f.localeCompare(s);
     }

     return firstComparison;
    });

    return arr.join('\n');
}