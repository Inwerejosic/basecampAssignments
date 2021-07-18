// Task 2



function isPrimeNumber(value) {
    let isprime = true;
    for (let i = 2; i <= 37 && i < value; i++) { //we are focusing on 2 - 7 because any number that can't be divided by these numbers is a prime number. This is important because it gives us an algo with a constant time complexity;
        if (value % i === 0) isprime = false; //if the number is divisible by the current loop iteration, then it is not a prime number;
    };
    return isprime;
};

document.getElementById('tasks').innerHTML = isPrimeNumber(value = prompt('PLease enter a positive integer: '));