// Task 3


function primes(arr) {

    function isPrimeNumber(value) {
        let isprime = true;
        for (let i = 2; i <= 37 && i < value; i++) {
            if (value % i === 0) isprime = false;
        };
        return isprime;
    };
    return arr.filter(value => isPrimeNumber(value) ? true : false);

};
document.getElementById('tasks').innerHTML = primes()

// Shipping with bug