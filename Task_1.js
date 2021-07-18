//one
function sum_of_EvenAndOdds(arr) {
    let myArray = []; //array to store the values;
    arr.forEach(value => { //iterate over the values in the array;
        if (value % 2 === 0) { //if value is even
            myArray[0] = myArray[0] ? myArray[0] + value : value; //if index 0 of myArray is empty, make it equal to the value, otherwise add current value to the value in index 0 of resArr;
        } else { //if value is odd
            myArray[1] = myArray[1] ? myArray[1] + value : value; //if index 1 of myArray is empty, make it equal to the value, otherwise add current value to the value in index 1 of resArr;
        }
    });
    return myArray; //return myArray;
};

document.getElementById("tasks").innerHTML = sum_of_EvenAndOdds([2, 4, 10, 11, 7, 9, 5, 13, 23, 17, 27]);