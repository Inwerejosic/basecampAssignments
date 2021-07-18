// Task 8



function thriz(num) {
    let count = 0;
    let numbers = [];

    for (let i = 0; i <= num; i++) {
        let test = String(i).split("3");
        if (test.length > 1) {
            count += test.length - 1;
            numbers.push(i);
        }
    }

    return {
        count,
        numbers
    };
};
document.getElementById('tasks').innerHTML = thriz(promt("Enter numbers "));