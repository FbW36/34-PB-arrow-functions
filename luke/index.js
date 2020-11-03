// ! 1. Multiply
// Multiply two numbers and return the result using an arrow function.
const multiplyTwoNums = (x, y) => x * y;
console.log(`multiplyTwoNums ==> `, multiplyTwoNums(4, 5));

// ! 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.
const doubleOddNums = (arrOfNums) => {
  const newArrOfNums = [];
  let doubledNum;
  for (let i = 0; i < arrOfNums.length; i++) {
    if (arrOfNums[i] % 2 !== 0) {
      doubledNum = arrOfNums[i] * 2;
      newArrOfNums.push(doubledNum);
    }
  }
  return newArrOfNums;
};

console.log(doubleOddNums([3, 5, 67, 12, 34, 4, 9, 30]));

// ! 3. Loopyloop
// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function.Return the new array.
const subTenOnArr = (arrOfNums) => {
  const newArrOfNums = [];
  for (let i = 0; i < arrOfNums.length; i++) {
    newArrOfNums.push(arrOfNums[i] - 10);
  }
  return newArrOfNums;
};

console.log(`subTenOnArr ==> `, subTenOnArr([5, 25, 46, 72, 1]));

// ! 4. Filter
// Given this array: [3, 62, 234, 7, 23, 74, 23, 76, 92], use the array filter method and an arrow function to create an array of the numbers greater than`70`.Store the result into a variable.
const filterGreaterThenSeventy = (arrOfNums) => {
  const newArr = [];
  for (let i = 0; i < arrOfNums.length; i++) {
    if (arrOfNums[i] >= 70) {
      newArr.push(arrOfNums[i]);
    }
  }
  return newArr;
};

console.log(
  "filterGreaterThenSeventy ==>",
  filterGreaterThenSeventy([3, 62, 234, 7, 23, 74, 23, 76, 92])
);

// ! 5. Geometrizer
// Create two functions that calculate the properties of a circle.

// Create a function called calcCircumfrence:
// * Pass the radius to the function.
// * Calculate the circumference based on the radius, and output "The circumference is NN".
const calcCircumfrence = (radius) => {
  circumference = Math.round(Math.PI * (radius * 2));
  return `the circumference is ${circumference}`;
};

console.log(calcCircumfrence(9));

// Create a function called calcArea:
// * Pass the radius to the function.
// * Calculate the area based on the radius, and output "The area is NN".
const calcArea = (radius) => {
  area = Math.round(Math.PI * Math.pow(radius, 2));
  return `The area is ${area}`;
};

console.log(calcArea(9));
