// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  const res = [];
  var maxValueFromFirstArray = Math.max(...arr1);
  var firstValue = arr2.every((el) => el > maxValueFromFirstArray);
  res.push(firstValue);

  var minValueFromSecondtArray = Math.min(...arr1);
  var secondValue = arr2.some((el) => el < minValueFromSecondtArray);
  res.push(secondValue);
  return res;
}

console.log(result(arr1, arr2));
