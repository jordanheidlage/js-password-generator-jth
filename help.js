// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase="abcdefghijklmnopqrstuvxyz"
var uppercase= lowercase.toUpperCase()
var number="0123456789"
var special="!@#$%^"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var finalpwd=""

  var size = prompt("Please enter 8 to 128 characters")
  console.log(size)
  // then do validations, if I am doing checking.

  if (size >= 8 && size <= 128) {
     var isLowercase= confirm("include lowercase?")
     console.log(isLowercase)

     var isUppercase= confirm("include uppercase?")
     console.log( isUppercase)
     var isNumber= confirm("include number?")
     console.log(isNumber)
     var isSpecial= confirm("include  special?")
     console.log(isSpecial)
      
     if(isLowercase===true){
          var positionString=Math.floor(Math.random() *26)  
          console.log(positionString) 
          finalpwd=finalpwd + lowercase[positionString]
     }
  else {
     alert("invalid entry")
  }

   return finalpwd

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);