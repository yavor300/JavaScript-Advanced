function getFibonator() {
    let f0 = 0;
    let f1 = 1;
    let fn = f1;

    let callsCounter = 0;

    return fib;

    function fib() {
        callsCounter++;

        if (callsCounter === 1) {
            return fn;
        }

        fn = f0 + f1;
        f0 = f1;
        f1 = fn;

        return fn;
    }
}
