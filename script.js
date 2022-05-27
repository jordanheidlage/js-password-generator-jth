// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function randomized(arr){
return arr[Math.floor(Math.random() * arr.length)]
}


function generatePassword(){

  // click on the generate button, then we ask the length of the password and all the character options thenthe password is gerated on the page
 var selectedCharacters= [];
 var finalPassword = [];

  var passwordLength = parseInt(prompt("Please choose between 8-128 characters"))

  console.log("Password Length "+passwordLength);

  if(!passwordLength){
    alert("Please input a value");
    return null
  }

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Choose between 8 and 128");
    return null
  }

    var confirmLowercase = confirm("Is this going to contain any lowercase letters?");

    var confirmUppercase = confirm("Is this going to contain any uppercase letters?");
    
    var confirmNumber = confirm("Is this going to contain any numbers?");
    
    var confirmSpecialchar = confirm("Is this going to contain any special characters?");
    

if (!confirmLowercase && !confirmUppercase && !confirmNumber && !confirmSpecialchar  ){
 alert("Pick something dude");
  return null
} 

if (confirmLowercase){
  selectedCharacters = selectedCharacters.concat(lowercase)
}
if (confirmUppercase){
  selectedCharacters = selectedCharacters.concat(uppercase)
}
if(confirmNumber){
  selectedCharacters = selectedCharacters.concat(number)
}
if(confirmSpecialchar){
  selectedCharacters = selectedCharacters.concat(specialChar)
}




for (var i = 0; i < passwordLength; i++) {
var randomCharacter = randomized(selectedCharacters)
  finalPassword.push(randomCharacter)
}

return finalPassword.join('');

}
