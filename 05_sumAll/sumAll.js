const sumAll = function (startNumber, endNumber) {
  let result = 0;
  let largestNumber = 0;
  let smallestNumber = 0;
  if (startNumber > endNumber) {
    smallestNumber = endNumber;
    largestNumber = startNumber;
  } else {
    largestNumber = endNumber;
    smallestNumber = startNumber;
  }
  console.log(smallestNumber);
  console.log(largestNumber);

  if (
    Number.isInteger(smallestNumber) &&
    Number.isInteger(largestNumber) &&
    smallestNumber >= 0 &&
    largestNumber >= 0
  ) {
    for (let i = largestNumber; i >= smallestNumber; i--) {
      result += i;
    }
  } else {
    result = "ERROR";
  }
  return result;
};

console.log(sumAll(2.5, 4));

// Do not edit below this line
module.exports = sumAll;
