function solve(...args) {
    const arguments = {};

    args.forEach(arg => {
        const type = typeof arg;
    
        if (arguments.hasOwnProperty(type)) {
            arguments[type] = arguments[type] + 1;
        } else {
            arguments[type] = 1;
        }

        console.log(`${type}: ${arg}`);
    });

    const sorted = [];
    for (const arg in arguments) {
        sorted.push([arg, arguments[arg]]);
    }
    sorted.sort((a, b) => b[1] - a[1]).forEach(arg => {
        console.log(`${arg[0]} = ${arg[1]}`);
    });
}