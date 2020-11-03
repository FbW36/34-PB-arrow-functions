// 1. Multiply
// Multiply two numbers and return the result using an arrow function.
const multiple = (x, y) => x * y;
console.log("1. Multiply ==>", multiple(4, 6));

// 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.
const doubleOdds = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArray.push(array[i] * 2);
    }
  }
  return newArray;
};
console.log("2. Double The Odds ==>", doubleOdds([3, 5, 67, 12, 34, 4, 9, 30]));

// 3. Loopyloop
// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.
const loopyloop = (array2) => {
  let newArray2 = [];
  for (let i = 0; i < array2.length; i++) {
    newArray2.push(array2[i] - 10);
  }
  return newArray2;
};
console.log("3. Loopyloop ==>", loopyloop([13, 25, 7, 72, 34, 64, 69]));

// 4. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.
const filter = (array3) => {
  let newArray3 = [];
  for (let i = 0; i < array3.length; i++) {
    if (array3[i] > 70) {
      newArray3.push(array3[i]);
    }
  }
  return newArray3;
};
console.log("4. Filter ==>", filter([3, 62, 234, 7, 23, 74, 23, 76, 92]));

// 5. Geometrizer
// Create two functions that calculate the properties of a circle.
// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
const calcCircumfrence = (radius) => 2 * Math.PI * radius;
console.log('"The circumference is', calcCircumfrence(10));

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
const calcArea = (radius) => Math.PI * radius * radius;
console.log('"The area is', calcArea(5));
