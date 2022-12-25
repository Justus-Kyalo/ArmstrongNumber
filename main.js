function isNarcissistic(n) {
  // Split the number into its digits
  const digits = n
    .toString()
    .split("")
    .map((d) => parseInt(d));
  // Calculate the power of each digit
  const power = digits.length;
  // Add up the powered digits
  let sum = 0;
  for (const d of digits) {
    sum += Math.pow(d, power);
  }
  // Check whether the sum is equal to the original number
  return sum === n;
}

console.log(isNarcissistic(153)); // true
console.log(isNarcissistic(1652)); // false
