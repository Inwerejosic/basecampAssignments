//Task 5 

// A function that will take a string and replace the spaces in with "%20"

var str = prompt("Enter a string here:"); // This allows the user to input what ever string they want
let replacedStr = str.replace(" ", "%20") ++ //This replaces the spaces in the string with %20.

    console.log(replacedStr); // This outputs the result of the program to the console
alert(replacedStr); // This outputs the result of the program by alerting it on the screen
document.getElementById('tasks').innerHTML = replacedStr;

// solvedcompletely //five