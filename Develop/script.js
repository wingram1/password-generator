// Assignment code here
var generatePassword = function() {

  console.log("New password! :D")

















  
  //prompt for password length
  var lengthPrompt = window.prompt("How long would you like your password to be (8 characters minimum, 128 characters maximum)?");

  while (!(lengthPrompt > 8) || !(lengthPrompt < 128)) {
    window.alert("You must enter a number between 8 and 128. Please try again.");
    lengthPrompt = window.prompt("How long would you like your password to be (8 characters minimum, 128 characters maximum)?");
    };

  console.log("Password Length: " + lengthPrompt);

  var lowerCaseCheck = window.confirm("Do you need lowercase characters?");


  var upperCaseCheck = window.confirm("Do you need uppercase characters?");

  var numericCheck = window.confirm("Do you need numeric characters?");

  var specialCheck = window.confirm("Do you need special characters?");




  return("your password here! :D");
};

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
