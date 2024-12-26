const sumAll = function (startNumber, endNumber) {
  let result = 0;
  if (startNumber < 0 || endNumber < 0) {
    return (result = "ERROR");
  } else {
    for (let i = startNumber; i <= endNumber; i++) {
      result += i;
    }
  }
  return result;
};

console.log(sumAll(1, 5));

// Do not edit below this line
module.exports = sumAll;
