// # 34-PB-arrow-functions

// ## Complete the following tasks using arrow functions.

// #### 1. Multiply
// Multiply two numbers and return the result using an arrow function.
// let multiply = (x, y) => {
//   return x * y;
// };
let multiply = (x, y) => x * y;
// #### 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.
const odd = (array) => {
  let oddNum = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddNum.push(array[i] * 2);
    }
  }
  return oddNum;
};
console.log(odd([3, 5, 67, 12, 34, 4, 9, 30]));

// #### 3. Loopyloop
// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.

const sub = (array) => {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    newarr.push(array[i] - 10);
  }
  return newarr;
};

console.log(sub([3, 5, 67, 12, 34, 4, 9, 30]));

// #### 4. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than `70`. Store the result into a variable.

const greater = (array) => {
  let greaterNum = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 70) {
      greaterNum.push(array[i]);
    }
  }
  return greaterNum;
};
console.log(greater([3, 62, 234, 7, 23, 74, 23, 76, 92]));

// #### 5. Geometrizer
// Create two functions that calculate the properties of a circle.

// Create a function called calcCircumfrence:
// * Pass the radius to the function.
// * Calculate the circumference based on the radius, and output "The circumference is NN".
const calcCircumfrence = (radius) =>
  `The circumference is ${Math.PI * radius * 2}`;

console.log(calcCircumfrence(3));
// Create a function called calcArea:
// * Pass the radius to the function.
// * Calculate the area based on the radius, and output "The area is NN".
const calcArea = (radius) => `The circumference is ${Math.PI * radius ** 2}`;
console.log(calcArea(9));

const calcArea2 = (radius) =>
  `The circumference is ${Math.PI * Math.pow(radius, 2)}`;
console.log(calcArea2(9));
