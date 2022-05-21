// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmNumber
var confirmLowercase
var confirmUppercase
var confirmSpecialchar
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  passwordLength = prompt("Please choose between 8-128 characters")
  console.log("Password Length"+passwordLength);

  if(!passwordLength){
    alert("Please input a value");

  }else if (passwordLength >= 8 && =passwordLength=<128) {
    passwordLength =prompt("Choose between 8 and 128");
    console.log("Password length"+passwordLength);

  } else {
    confirmLowercase = confirm("Is this going to contain any lowercase letters?");
    console.log("Lower case"+confirmLowercase)
    confirmUppercase = confirm("Is this going to contain any uppercase letters?");
    console.log("Upper case"+confirmUppercase)
    confirmNumber = confirm("Is this going to contain any numbers?");
    console.log("Numbers"+ confirmNumber);
    confirmSpecialchar = confirm("Is this going to contain any special characters?");
    console.log("Special characters"+confirmSpecialchar);

};

if (!confirmLowercase && !confirmUppercase && confirmNumber && confirmSpecialchar && ){
  userChoices = alert("Pick something dude");



for (var i = 0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}
