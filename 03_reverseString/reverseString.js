const reverseString = function (userInput) {
  let userInputReversed = "";
  for (let i = userInput.length - 1; i >= 0; i--) {
    userInputReversed += userInput[i];
  }
  return userInputReversed;
};
console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
