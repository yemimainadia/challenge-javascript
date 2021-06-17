// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning
// 2. even number at the end of array
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  for (var i = 0; i < arr2.length / 2; i++) {
    if (arr2[i] % 2 == 0) {
      arr2.push(arr2.splice(i, 1)[0]);
    }
  }

  var lengthArr1 = arr1.length;
  var lengthArr2 = arr2.length;

  // console.log(arr2);

  // find differences between arr2 and arr1
  // start with arr2 because all item in arr1 will be inserted
  var differences = arr2.filter((x) => !arr1.includes(x));
  var lengthDifferences = differences.length;

  // sort result from "differences" where
  // odd numbers start first then followed by even numbers
  var sortedArr;
  // Make all odd numbers negative
  for (let i = 0; i < lengthDifferences; i++)
    if (differences[i] & 1)
      // Check for odd
      differences[i] *= -1;

  // Sort all numbers
  differences.sort((a, b) => a - b);

  // Retaining original array (multiply back with -1)
  for (let i = 0; i < lengthDifferences; i++)
    if (differences[i] & 1) differences[i] *= -1;

  // divide differences to 2 to know where to add arr1
  var indexToAdd = lengthDifferences / 2;

  differences.splice(indexToAdd, 0, ...arr1);
  return differences;
}

console.log(result(arr1, arr2));
