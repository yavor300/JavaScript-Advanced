function solve(arr) {
    let num = 1;
    const result = [];

    arr.forEach(element => {
        if (element === 'add') {
            result.push(num);
        } else {
            result.pop();
        }
        num += 1;
    });

    if (result.length === 0) {
        return 'Empty';
    }

    return result.join('\n');
}