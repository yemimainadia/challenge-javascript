// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  //convert number 221 to binary
  let binary = (num % 2).toString();
  for (; num > 1; ) {
    num = parseInt(num / 2);
    binary = (num % 2) + binary;
  }
  //get the total '1' from the binary variable
  var sum = 0;
  for (var i = 0, length = binary.length; i < length; i++) {
    sum += Number(binary[i]);
  }
  return sum;
}

console.log(result(number));
