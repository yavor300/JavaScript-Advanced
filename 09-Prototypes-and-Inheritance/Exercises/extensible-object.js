function extensibleObject() { 
    const result = {};

    result.extend = function(template) {
        Object.entries(template).forEach(([key, value]) => {
            if (typeof value === 'function') {
                Object.getPrototypeOf(this)[key] = value;
            } else {
                this[key] = value;
            }
        });

    }

    return result;
}   