//Task 7



function standard_Dev(arr) {
    let mean = (arr.reduce((acc, val) => acc + val)) / arr.length;

    let variance = (arr.map(value => value - mean)
        .map(value => value ** 2)
        .reduce((acc, val) => acc + val)) / arr.length;

    return Math.sqrt(variance);
};
document.getElementById('tasks').innerHTML = standard_Dev;