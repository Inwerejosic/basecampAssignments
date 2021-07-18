 // Task 4


 function pValidator(passwd) {
     if (!passwd) return "very weak"; //handle edge cases for when undefined or empty string is given as passwd;
     if (!isNaN(passwd)) return "weak"; //if the password value submitted is an integer;

     let conditions = {
         "numbers": null,
         "letters": null,
         "special_char": null
     }; //obj to keep track of conditions that have been met

     passwd.split("").forEach(value => { //split the password string and iterate over each value;
         if (isNaN(Number(value))) { //if the value is not a number
             if (value.toLowerCase() === value.toUpperCase()) { //if the lowercase and the uppercase version of the value are equal, then it is a special character;
                 conditions.special_char = true;
             } else { //if the lowercase and the uppercase version of the value are not equal, then it is a string;
                 conditions.letters = true;
             }
         } else { //if the value is a number
             conditions.numbers = true;
         }
     });

     if (conditions.letters && !conditions.numbers && !conditions.special_char) return "very weak"; //if password contains only letters;
     if (!conditions.letters && conditions.numbers && !conditions.special_char) return "weak"; //if password contains only numbers
     if (conditions.letters && conditions.numbers && !conditions.special_char) return "strong"; //if password contains letters and numbers
     if (conditions.letters && conditions.numbers && conditions.special_char) return "very strong"; //if password contains letters numbers and special chars;
     return "very strong"; //any other string that doesn't match the above conditions will be treated as strong;

 };
 document.getElementById('tasks').innerHTML = pValidator(passwd = prompt("Enter password: "));