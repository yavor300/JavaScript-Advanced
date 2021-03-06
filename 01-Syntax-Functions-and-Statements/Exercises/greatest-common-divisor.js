function solve(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) {
        return false;
    }

    x = Math.abs(x);
    y = Math.abs(y);

    while(y) {
      const temp = y;
      y = x % y;
      x = temp;
    }

    console.log(x);
}