//one
function sumOfEvenAndOddInts(arr) {
    let resArr = []; //array to store the values;
    arr.forEach(value => { //iterate over the values in the array;
        if (value % 2 === 0) { //if value is even
            resArr[0] = resArr[0] ? resArr[0] + value : value; //if index 0 of resArr is empty, make it equal to the value, otherwise add current value to the value in index 0 of resArr;
        } else { //if value is odd
            resArr[1] = resArr[1] ? resArr[1] + value : value; //if index 1 of resArr is empty, make it equal to the value, otherwise add current value to the value in index 1 of resArr;
        }
    });
    return resArr; //return resArr;
};

document.getElementById("tasks").innerHTML = sumOfEvenAndOddInts([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);