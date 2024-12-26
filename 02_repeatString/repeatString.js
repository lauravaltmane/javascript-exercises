let result = "";

const repeatString = function (string, num) {
  for (let i = 0; i < num; i++) {
    result += string;
  }
};
repeatString("hey", 3);

console.log(result);
// Do not edit below this line
module.exports = repeatString;
