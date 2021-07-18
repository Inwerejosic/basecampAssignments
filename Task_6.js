//six

function threeValues(num_Arr, num) {
    num_Arr = num_Arr.filter(value => value > num ? false : true); //filter out values larger than num since they are unneccessary;

    let numObj = {};

    num_Arr.forEach(value => {
        numObj[value] = true; // to convert num_Arr to an object of numbers
    });

    for (let i = 0; i < num_Arr.length; i++) {
        for (let j = i + 1; j < num_Arr.length; j++) {
            let test = num - num_Arr[i] - num_Arr[j];
            if (numObj[test]) {
                return [num_Arr[i], num_Arr[j], test];
            }
        }
    }
};
document.getElementById('tasks').innerHTML = threeValues()