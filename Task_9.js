// Task 9


function is_palindrome(str) {
    let rev = "";
    for (let i = str.length; i >= 0; i--) {
        rev += str[i];
    };

    return str === rev ? "Yes" : "No";
};
document.getElementById('tasks').innerHTML = is_palindrome;