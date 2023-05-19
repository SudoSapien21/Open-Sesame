// Assignment Code
var generateBtn = document.querySelector("#generate");
 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var length = prompt("Enter the length of the password (8-128 characters):");
  length = parseInt(length);

  // Validate the length input
  if (length < 8 || length > 128) {
    length = prompt("Invalid length! Please enter a valid length between 8 and 128 characters:");
    length = parseInt(length);
  }
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");
// Validate at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }
  var chars = '';
  if (includeLowercase) {
    chars += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (includeUppercase) {
    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  if (includeNumeric) {
    chars += '0123456789';
  }
  if (includeSpecial) {
    chars += '!@#$%^&*()';
  }

  var password = '';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  return password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
