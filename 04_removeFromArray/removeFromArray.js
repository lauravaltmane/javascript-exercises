const removeFromArray = function (predefinedArray, elementToRemove) {
  let finalArray = predefinedArray.filter((value) => value !== elementToRemove);
  //console.log(finalArray);
  return finalArray;
};
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
