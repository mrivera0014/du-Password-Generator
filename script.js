//variables for numbers, special characters, upper and lower case
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//write function called generatePassword
//TODO we have to return the password in funtion(generatePassword)

function generatePassword() {
  //need variable to store the wants
  //variable saving password to return
  var chosen = []
  var = validateChar []
  var = finalPassword('')
  //variable holding prompt for password length
  var passLength = parseInt(prompt("How long would you like your password to be?"));
  //prompts return strings I will need to change to numbers to validate
  //we need an if statement to make sure they are between 8-128 characters
  //we need a confirm to see if want special characters
  var hasSpecial = confirm
  //we need a confirm to see if want numbers characters
  var hasNumber = confirm
  //we need a confirm to see if want lower characters
  var hasLower = confirm
  //we need a confirm to see if want upper characters

  //need an if statement to make sure they pick at least ONE character


  if (hasSpecial === 'false' && hasNumber === 'false') {
    alert('pick at least one')

  }

  if () {

  }

  //we need 4 ifs to see what characters they want from those characters to store into array

  if (hasSpecial) { }
  chosen.concat(special)
  validateChar.push(randomizer(special))//do not need right away if code does not work ask Maria
  if (hasNumber) { }
  chosen.concat(number)
  validateChar.push(randomizer(special))
  if (hasUpper) { }
  chosen.concat(upper)
  validateChar.push(randomizer(special))
  if (hasLower) { }
  chosen.concat(lower)
  validateChar.push(randomizer(special))

  //for loop to loop through this array

  for () {


  }

  //return finalPassword;


  function randomizer() {

    var randomIndex = Math.floor()
  }


}



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
