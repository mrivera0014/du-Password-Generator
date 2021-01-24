//variables for numbers, special characters, upper and lower case
var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//write function called generatePassword
//TODO we have to return the password in function(generatePassword)
function randomizer(a) {

  var randomIndex = Math.floor(Math.random() * a.length)
  var ranChar = a[randomIndex];
  return ranChar
}

var generatePassword = function () {
  //need variable to store the wants
  //variable saving password to return
  var chosen = []
  var validateChar = []
  var finalPassword = ('')
  //variable holding prompt for password length
  var passLength = parseInt(prompt("How long would you like your password to be?"));
  if (passLength <= 8 || passLength >= 129 || passLength == NaN) {
    prompt("Please pick 8-128")
  }
  //prompts return strings I will need to change to numbers to validate --parseInt()
  //we need an if statement to make sure they are between 8-128 characters (number)
  //we need a confirm to see if want special characters
  var hasSpecial = confirm("Would you like special character?")
  //we need a confirm to see if want numbers characters
  var hasNumber = confirm("Would you like numbers?")
  //we need a confirm to see if want lower characters
  var hasLower = confirm("Would you like lower case letters?")
  //we need a confirm to see if want upper characters
  var hasUpper = confirm("Would you like upper case letters?")
  var userChoices = {
    chosenLength: passLength,
    chosenSpecial: hasSpecial,
    chosenNumber: hasNumber,
    chosenLower: hasLower,
    chosenUpper: hasUpper
  };
  console.log(userChoices)
  //need an if statement to make sure they pick at least ONE character


  if (hasSpecial === 'false' && hasNumber === 'false') {
    alert('pick at least one')

  }
  //we need 4 ifs to see what characters they want from those characters to store into array

  if (userChoices.chosenSpecial) {
    chosen = chosen.concat(special)
    chosen.push(randomizer(special))
    console.log(chosen)
  }
  //do not need right away if code does not work ask Maria
  if (userChoices.chosenNumber) {
    chosen = chosen.concat(number)
    chosen.push(randomizer(number))
    console.log(chosen)
  }

  if (userChoices.chosenUpper) {
    chosen = chosen.concat(upper)
    chosen.push(randomizer(upper))
    console.log(chosen)
  }

  if (userChoices.chosenLower) {
    chosen = chosen.concat(lower)
    chosen.push(randomizer(lower))
    console.log(chosen)
  }


  //for loop to loop through this array

  for (i = 0; i < userChoices.length; i++) {
    var password = randomizer(chosen)
    validateChar.push(password)
    console.log(password)
  }

  console.log(validateChar.join(""))

  return validateChar.join("")





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
