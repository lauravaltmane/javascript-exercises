const convertToCelsius = function (tempFahrenheit) {
  let tempCelsius = (tempFahrenheit - 32) * (5 / 9);
  return Math.round(tempCelsius * 10) / 10;
};

const convertToFahrenheit = function (tempCelsius) {
  let tempFahrenheit = tempCelsius * (9 / 5) + 32;
  return Math.round(tempFahrenheit * 10) / 10;
};

console.log(convertToCelsius(32)); // fahrenheit to celsius, should return 0
console.log(convertToCelsius(345)); // fahrenheit to celsius, should return 0
console.log(convertToFahrenheit(0)); // celsius to fahrenheit, should return 32
console.log(convertToFahrenheit(444)); // celsius to fahrenheit, should return 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
