// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseArr= ["A","B","C","D","E"]
var lowerCaseArr = ["a","b","c","d","e"]
var specialCharArr =["!","@","#","$","%"]
var numbersArr = ["1","2","3","4","5"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}
function generatePassword() {
 var length = prompt ("Type in length (8-128)")
 console.log (length)
 if (length < 8 || length > 128) {
   alert ("Chosoe a number between 8-128")
   return "Try again"
 }
   

 var upperCase = confirm ("Do you want uppercase characters?")
 console.log (upperCase)
 var lowerCase = confirm ("Do you want lowerCase characters?")
 console.log (lowerCase)
 var specialChar = confirm ("Do you want specialCha characters?")
 console.log (specialChar)
 var numbers = confirm ("Do you want numbers characters?")
 console.log (numbers)
 if (upperCase === false && lowerCase === false && specialChar === false && numbers === false)
 alert ("Must have at least 1")
 return "Try again"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
