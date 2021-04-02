function solve(a, b, c) {
    const length = a.length + b.length + c.length;
    const avg = length / 3;
    console.log(length);
    console.log(Math.floor(avg));
}

solve('chocolate', 'ice cream', 'cake');