function solve(arr) {
    arr.shift();

    const result = [];

    arr.forEach(element => {
        const cities = element.split('|').filter(t => t.trim().length !== 0).map(t => t.trim());
        
        const obj = {
            Town: cities[0],
            Latitude: Number(Number(cities[1]).toFixed(2).toString()),
            Longitude: Number(Number(cities[2]).toFixed(2).toString())
        };

        result.push(obj);
    });

    return JSON.stringify(result);
}