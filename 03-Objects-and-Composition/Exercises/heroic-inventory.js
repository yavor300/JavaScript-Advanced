function solve(arr) {
    const result = [];

    arr.forEach(element => {
        const tokens = element.split(' / ');
        const obj = {name: tokens[0], level: Number(tokens[1])};
        const items = [];

        if (tokens.length === 3) {
            tokens[2].split(', ').forEach(item => {
                items.push(item);
            });
        }
        
        obj.items = items;
        result.push(obj);
    });

    return JSON.stringify(result);
}