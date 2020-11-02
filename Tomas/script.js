let log = console.log;

// Multiply two numbers and return the result using an arrow function
const multiply = (x, y) => x * y;
log("1. -->", multiply(4, 5));

// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2
const filterOdds = (arr) => {
  const oddNums = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddNums.push(arr[i] * 2);
    }
  }
  log("2. -->", oddNums);
};
filterOdds([3, 5, 67, 12, 34, 4, 9, 30]);

// Given an array of numbers, loop through the array and subtract 10 from each element using an arrow function. Return the new array
const subtractTen = (arr) => {
  const numMinusTen = [];
  for (i = 0; i < arr.length; i++) {
    numMinusTen.push(arr[i] - 10);
  }
  return numMinusTen;
};
log("3.-->", subtractTen([3, 5, 67, 12, 34, 4, 9, 30]));

// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.
const arrToSort = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const filterSeventyUp = arrToSort.filter((number) => number > 70);
log("number above 70 -->", filterSeventyUp);

// Create two functions that calculate the properties of a circle

// Calculate the circumference based on the radius
const calcCircumference = (r) => 2 * Math.PI * r;
log("circumference rounded-->", Math.round(calcCircumference(5)));

// Calculate the area based on the radius
const calcArea = (r) => Math.PI * Math.pow(r, 2);
log("area to one decimal-->", calcArea(5).toFixed(1));
