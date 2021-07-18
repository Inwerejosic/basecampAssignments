// Task 10


function Frequency_ofLetter(str) {
    let freqObj = {};

    for (let value of str) {
        freqObj[value] = freqObj[value] ? freqObj[value] + 1 : 1;
    }

    let highest = 0;

    Object.values(freqObj).forEach(freq => {
        if (freq > highest) {
            highest = freq;
        }
    });

    let resArr = [];
    Object.keys(freqObj).forEach(value => {
        if (freqObj[value] === highest) {
            resArr.push({
                [value]: highest
            });
        }
    })

    return resArr.length > 1 ? resArr : resArr[0];
};
document.getElementById('tasks').innerHTML = Frequency_ofLetter;