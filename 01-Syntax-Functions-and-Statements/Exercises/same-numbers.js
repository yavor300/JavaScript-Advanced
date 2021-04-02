function solve(num) {
    let sum = calculateSumOfDigits(num);

    const digit = num % 10;
    while (num) {
        if (num % 10 !== digit) {
            console.log(false);
            console.log(sum);
            return;
        }
        num = Math.floor(num / 10);
    }
    console.log(true);
    console.log(sum);

    function calculateSumOfDigits(number) {
        let sum = 0;
        while (number) {
            sum += number % 10;
            number = Math.floor(number / 10);
        }
        return sum;
    }
}