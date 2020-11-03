// 1
const mult = (x, y) => x * y;
console.log("mult ==>", mult(2, 3));

// 2
oddNumbers = [];
const double = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] % 2 != 0) {
      oddNumbers.push(arr[x] * 2);
    }
  }
  return oddNumbers;
};
console.log(double([3, 5, 67, 12, 34, 4, 9, 30]));

// 3
result = [];
const subtr10 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] - 10);
  }
  return result;
};
console.log(subtr10([40, 50, 90, 2, 7, 9, 67]));

// 4
arr = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const greater70 = (value) => value > 70;
console.log(arr.filter(greater70));

// 5
const calcCircunference = (rad) => (circunference = 2 * Math.PI * rad);
const calcArea = (rad) => (area = Math.PI * rad ** 2);

console.log("The circumference is:", calcCircunference(5));
console.log("The area is:", calcArea(5));
