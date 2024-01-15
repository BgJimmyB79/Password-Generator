// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
var passwordLength = prompt("Choose a pasword length between 8 and a 128 characters");
if (passwordLength<8 || passwordLength>128){
  alert ("Pasword length MUST between 8 and a 128 characters!");
  return generatePassword()
}
var confirmLower = confirm("Would you like lower case?");
var confirmUpper = confirm("Would you like upper case?");
var confirmNumber = confirm("Would you like numbers?");
var confirmSpecial = confirm("Would you like special characters?");
var chooseCharacters = ""

if (confirmLower){
chooseCharacters += "qwertyuiopasdfghjklzxcvbnm"
}
if (confirmUpper){
  chooseCharacters += "QWERTYUIOPASDFGHJKLZXCVBNM"
}
if (confirmNumber){
chooseCharacters += "1234567890"
}
if (confirmSpecial){
  chooseCharacters += "!@#$%^&*()"
}
if (!chooseCharacters.length){
  alert ("Pasword criteria  MUST include at least 1 charactor type");
  return generatePassword()
}
console.log(chooseCharacters)
var password = ""
for (let i = 0; i < passwordLength; i++) {
password += chooseCharacters.charAt(Math.floor(Math.random() * chooseCharacters.length));  
}

return password
}
