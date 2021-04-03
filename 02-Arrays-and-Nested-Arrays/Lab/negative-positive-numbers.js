function solve(arr) {
    const result = [];
                
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 ) {
            result.push(arr[i]);
        } else {
            result.unshift(arr[i]);
        }
    }
    print(result);


    function print(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}