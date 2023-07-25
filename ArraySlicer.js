const numberArray = [1, 2, 3, 4, 5];
const numberOfGroups = 3;

function groupArray(arrayToSlice, groups) {
  const arrayLength = arrayToSlice.length;
  const numberOfItemsInEachGroups = Math.round(arrayLength / groups)
  const newArray = [];
  var newSubArray = [];
  var i = 0

  for (i; i < arrayLength - numberOfItemsInEachGroups; i += numberOfItemsInEachGroups) {
    newSubArray = arrayToSlice.slice(i, i + numberOfItemsInEachGroups)
    newArray.push(newSubArray)
  }
  newSubArray = arrayToSlice.slice(i - arrayLength);
  newArray.push(newSubArray)
  return newArray;
};

console.log(groupArray(numberArray, numberOfGroups));

//accept strings and numbers
