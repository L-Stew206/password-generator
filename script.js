// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"];
var numbersArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// critera for the length of writing password
function writePassword() {
  var lengthSize = parseInt(prompt("Choose desired password length (8-128)"))
  console.log(lengthSize)
  if (lengthSize < 8 || lengthSize > 128) {
    alert("Choose a number between (8-128)")
    return;
  }

  // User Seletion for password options
  var upperCase = confirm("Do you want uppercase characters?")
  console.log(upperCase)
  var lowerCase = confirm("Do you want lowerCase characters?")
  console.log(lowerCase)
  var specialChar = confirm("Do you want special characters?")
  console.log(specialChar)
  var numbers = confirm("Do you want number(s) characters?")
  console.log(numbers)

  if (upperCase === false && lowerCase === false && specialChar === false && numbers === false) {
    alert("Must have at least 1 of the following options included");
    return "Try again";
  }

  // combining arrays for possible password outcome
  var possiblePass = [];
  var finalPass = "";

  if (upperCase === true) {
    possiblePass = possiblePass.concat(upperCaseArr);
  }
  if (lowerCase === true) {
    possiblePass = possiblePass.concat(lowerCaseArr);
  }
  if (specialChar === true) {
    possiblePass = possiblePass.concat(specialCharArr);
  }
  if (numbersArr === true) {
    possiblePass = possiblePass.concat(numbersArr);
  }
   // Possible password selection 
  for (var i = 0; i < lengthSize; i++) {
    finalPass = finalPass+possiblePass[Math.floor(Math.random() * possiblePass.length)];
    document.querySelector("#password").placeholder=finalPass;
  }
  console.log(possiblePass);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
