//bonus2

function consonants(str) {
    let constant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    let constantObj = {};
    let res = "";

    constant.forEach((value, index) => {
        constantObj[value] = index;
    });

    for (let i of str) {
        if (constantObj[i] !== undefined) {
            res += constant[constantObj[i] + 1];
        } else {
            res += i;
        }
    };

    return res;
};