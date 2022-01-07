// Assignment code here
var generatePassword = function() {

  var lowerCaseBank = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericBank = "1234567890";
  var specialBank = "!" + "\u0022" + "#$%&'()*+,-./:;<=>?@[" + "\u005C" + "]^_`{|}~"; //unicodes are " and \ which would break the string

  console.log("New password! :D")

  //prompt for password length
  var lengthPrompt = window.prompt("How long would you like your password to be (8 characters minimum, 128 characters maximum)?");

  while (!(lengthPrompt >= 8) || !(lengthPrompt <= 128)) {
    window.alert("You must enter a number between 8 and 128. Please try again.");
    lengthPrompt = window.prompt("How long would you like your password to be (8 characters minimum, 128 characters maximum)?");
    };

  console.log("Password Length: " + lengthPrompt);

  var requestedCriteria = ""
  console.log("Let's add things to our requested criteria!");

  var lowerCaseCheck = window.confirm("Do you need lowercase characters?");
  if (lowerCaseCheck) {
    requestedCriteria += lowerCaseBank;
    console.log("Current directory: " + requestedCriteria)
  };

  var upperCaseCheck = window.confirm("Do you need uppercase characters?");
  if (upperCaseCheck) {
    requestedCriteria += upperCaseBank;
    console.log("Current directory: " + requestedCriteria)
  };

  var numericCheck = window.confirm("Do you need numeric characters?");
  if (numericCheck) {
    requestedCriteria += numericBank;
    console.log("Current directory: " + requestedCriteria)
  };

  var specialCheck = window.confirm("Do you need special characters?");
  if (specialCheck) {
    requestedCriteria += specialBank;
    console.log("Current directory: " + requestedCriteria)
  };

  console.log("Final directory: " + requestedCriteria)
  console.log("requestedCriteria.length=" + requestedCriteria.length);

  if (requestedCriteria === "") {
    window.alert("You didn't enter any criteria!");
    console.log(requestedCriteria);
    window.alert("???")
  }
  else {
    var newPassword = "";

    //get a random character in the requestedCriteria string to fill out lengthPrompt
    for (let i = 0; i < lengthPrompt; i++) {
        newPassword += requestedCriteria.charAt(Math.floor(Math.random() * requestedCriteria.length));
        console.log("Generating... " + newPassword);
    }

    console.log("Done!:" + newPassword);
    return newPassword;
  }
};


    //TODO: also need to set parameters for having at least one of each criteria type
//STORE EACH CHECK AS A VALUE
//USE MATH.RANDOM TO RANDOMIZE VALUES
//WRITE EACH VALUE IN A STRING WHICH WILL BE RETURNED AS THE FUNCTION VALUE
//WILL KEEP RANDOMIZING AND WRITING UNTIL lengthPrompt HAS BEEN FULFILLED






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
