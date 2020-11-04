// #### 1. Multiply

// Multiply two numbers and return the result using an arrow function.

const multiply = (num1, num2) => {
  return num1 * num2;
};

console.log("multiply(2,5) :>> ", multiply(2, 5)); //10

console.log("multiply(3,7) :>> ", multiply(3, 7)); //21
// #### 2. Double The Odds

// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.

const doubleOdds = (array) => {
  let boxOdds = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 != 0) {
      boxOdds.push(element * 2);
    }
  }

  return boxOdds;
};
console.log("doubleOdds :>> ", doubleOdds([3, 5, 67, 12, 34, 4, 9, 30])); //doubleOdds :>>  [ 6, 10, 134, 18 ]

// #### 3. Loopyloop

// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.

const Loopyloop = (array) => {
  let boxNums = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    boxNums.push(element - 10);
  }
  return boxNums;
};

console.log("Loopyloop :>> ", Loopyloop([10, 45, 97, 32])); //Loopyloop :>>  [ 0, 35, 87, 22 ]

// #### 4. Filter

// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than `70`. Store the result into a variable.

const Filter = (array) => {
  let boxNums = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > 70) {
      boxNums.push(element);
    }
  }
  return boxNums;
};
console.log("Filter :>> ", Filter([3, 62, 234, 7, 23, 74, 23, 76, 92])); //Filter :>>  [ 234, 74, 76, 92 ]

// #### 5. Geometrizer

// Create two functions that calculate the properties of a circle.

// Create a function called calcCircumfrence:

// - Pass the radius to the function.
// - Calculate the circumference based on the radius, and output "The circumference is NN".

const calcCircumfrence = (radius) => {
  const circunference = (2 * Math.PI * radius).toFixed(2);
  return `The circumference is ${circunference}mm`;
};

console.log("calcCircumfrence :>> ", calcCircumfrence(20));

// Create a function called calcArea:

// - Pass the radius to the function.
// - Calculate the area based on the radius, and output "The area is NN".

const calcArea = (radius) => {
  const circunference = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  return `The area is ${circunference}mm`;
};

console.log("calcArea :>> ", calcArea(10));
