
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//Validation to make sure the user requests between 8 and 128 characters
function generatePassword() {

  var Validation = false;
//Loop to make sure that the user selects a number between 8 and 128
  do {
    var userLength = prompt("Enter a number between 8 and 128");
    userLength = parseInt(userLength);

    if ((userLength < 8) || (userLength > 128) || (isNaN(userLength))) {
      alert("Please enter a valid Number");
    }
    else
      Validation = true;

  } while (!Validation);
// Arrays for functions to pull from
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialsArray = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
    "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_",
    "`", "{", "|", "}", "~"];
  Validation = false;
// prompts to confirm which characters the user wants
  do {
    var lowerAlpha = confirm("Would you like lower-case characters?");
    var upperAlpha = confirm("Would you like upper-case characters?");
    var Numerical = confirm("Would you like numerical characters?");
    var specialsChar = confirm("Would you like special characters?");
//if the user selects none it will prompt them to select at least one
    if ((lowerAlpha == false) && (upperAlpha == false) && (numerical == false))
      alert("Please set at lease one set of characters.");
    else
      Validation = true;
  } while (!Validation);
//indicates an array for the computer to refer to 
  var passArray = [];
//Makes sure the character is lowercase if applicable
  if (lowerAlpha == true) {
    for (var i of alphabet)
      passArray.push(i.toLowerCase());
  }
//Makes sure the charcter is Uppercase if applicable  
  if (upperAlpha == true) {
    for (var i of alphabet)
      passArray.push(i.toUpperCase());
  }
//Confirms if the user wanted a special character
  if (specialsChar == true) {
    for (var i of specialsArray)
      passArray.push(i);
  }
//Confirms if the user wanted a number
  if (Numerical == true) {
    for (var i of numerical)
      passArray.push(i);
  }


  var returnVar = "";

  //Generating password

  for (var i = 0; i < userLength; i++)
    returnVar += passArray[Math.floor(Math.random() * passArray.length)];


  return returnVar;

}
// Add event listener to generate button (Connecting the functions etc)
generateBtn.addEventListener("click", writePassword);
