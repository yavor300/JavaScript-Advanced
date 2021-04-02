function solve(...params) {
    let number = parseInt(params[0]);
    params.shift();

    for (let i = 0; i < params.length; i++) {
        switch (params[i]) {
            case 'chop':
                number /= 2;
                break;
            
            case 'dice':
                number = Math.sqrt(number);
                break;

            case 'spice':
                number += 1;
                break;

            case 'bake':
                number *= 3;
                break;
                
            case 'fillet':
                number *= 0.8;
                break;
        }
        console.log(number);
    }
}