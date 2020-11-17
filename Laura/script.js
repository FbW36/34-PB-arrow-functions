// # 34-PB-arrow-functions

// #### 1. Multiply
// Multiply two numbers and return the result using an arrow function.
const multiply = (a, b) => a * b;

// #### 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.
const array = [3, 5, 67, 12, 34, 4, 9, 30];
filteredArray = array
    .filter((num) => num % 2 !== 0)
    .map((num) => num * 2);

console.log(filteredArray); // [ 6, 10, 134, 18 ]


// #### 3. Loopyloop
// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.
const array2 = [2, 4, 8];
substract10 = array2.map((num) => num - 10);
console.log(substract10); // [ -8, -6, -2 ]


// #### 4. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than `70`. Store the result into a variable.
const array3 = [3, 62, 234, 7, 23, 74, 23, 76, 92];
let greaterThan70 = array3.filter((num) => num > 70);
console.log(greaterThan70); // [ 234, 74, 76, 92 ]


// #### 5. Geometrizer
// Create two functions that calculate the properties of a circle.

// Create a function called calcCircumfrence:

// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:

// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius) {
    return `The circumferencis is ${2 * Math.PI * radius}`;
}

function calcArea(radius) {
    return `The are is ${Math.PI * Math.pow(radius, 2)}`;
}

console.log(calcCircumference(60));
console.log(calcArea(60));