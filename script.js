//function to generate a new password if generateBtn is clicked
var generatePassword = function() {

  //set character banks for each criteria
  var lowerCaseBank = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericBank = "1234567890";
  var specialBank = "!" + "\u0022" + "#$%&'()*+,-./:;<=>?@[" + "\u005C" + "]^_`{|}~"; //unicodes are " and \ which would break the string

  //log that user has clicked generateBtn and function is starting
  console.log("New password! :D")

  //prompt for password length
  var lengthPrompt = window.prompt("How long would you like your password to be (8 characters minimum, 128 characters maximum)?");

  //if lengthPrompt is NOT a number between 8 and 128 alert and repeat prompt
  while (!(lengthPrompt >= 8) || !(lengthPrompt <= 128)) {
    window.alert("You must enter a number between 8 and 128. Please try again.");
    lengthPrompt = window.prompt("How long would you like your password to be (8 characters minimum, 128 characters maximum)?");
    };

  //log inputted password length
  console.log("Password Length: " + lengthPrompt);

  //set up requestedCriteria as a string which will store each character banks the user selects
  var requestedCriteria = ""
  console.log("Let's add things to our requested criteria!");

  //prompt for lowercase characters
  var lowerCaseCheck = window.confirm("Do you need lowercase characters?");
  if (lowerCaseCheck) {
    requestedCriteria += lowerCaseBank;
    console.log("Current directory: " + requestedCriteria)
  };

  //prompt for uppercase characters
  var upperCaseCheck = window.confirm("Do you need uppercase characters?");
  if (upperCaseCheck) {
    requestedCriteria += upperCaseBank;
    console.log("Current directory: " + requestedCriteria)
  };

  //prompt for numeric characters
  var numericCheck = window.confirm("Do you need numeric characters?");
  if (numericCheck) {
    requestedCriteria += numericBank;
    console.log("Current directory: " + requestedCriteria)
  };

  //prompt for special characters
  var specialCheck = window.confirm("Do you need special characters?");
  if (specialCheck) {
    requestedCriteria += specialBank;
    console.log("Current directory: " + requestedCriteria)
  };

  //log final character directory
  console.log("Final directory: " + requestedCriteria)
  console.log("requestedCriteria.length=" + requestedCriteria.length);

  //set variable for new generated password to empty
  var newPassword = "";

  //check if no criteria has been selected and requestedCriteria is an empty string
  if (requestedCriteria === "") {
    console.log("requestedCriteria empty; newPassword not updated.");
    window.alert("You didn't enter any criteria! Please click the button and try again.");
  }
  else {
    //loop to get a random character from the requestedCriteria string and add to newPassword until lengthPrompt is satisfied
    for (let i = 0; i < lengthPrompt; i++) {
        newPassword += requestedCriteria.charAt(Math.floor(Math.random() * requestedCriteria.length));

        //log each update of newPassword
        console.log("Generating... " + newPassword);
    }

    //log and return newPassword
    console.log("Done! Your new password is: " + newPassword);
  }

  //get value of newPassword to be displayed on screen
  return newPassword;

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
