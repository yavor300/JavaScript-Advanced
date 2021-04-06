function solve(library, orders) {
    const result = [];

    orders.forEach(element => {
        const name = element.template.name;

        const object = {name};

        element.parts.forEach(part => {
            if (library.hasOwnProperty(part)) {
                object[part] = library[part];
            }
        })

        result.push(object);
    });

    return result;
}