//34-PB-arrow-functions
// Complete the following tasks using arrow functions.
// 1. Multiply

// Multiply two numbers and return the result using an arrow function.
const multiply = (x,y) => x*y;
console.log("multiply => ", multiply(10,4) )


// 2. Double The Odds

// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2
oddOrNot = [];
const double = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddOrNot.push(arr[i] * 2);
    }
  }
  return oddOrNot;
};
console.log(double([3, 5, 67, 12, 34, 4, 9, 30]));

//3. Loopyloop
//Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.
newArray = [];
const lessTen = (arr) => {
  for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i] - 10);
  }
  return newArray;
};
console.log(lessTen([20, 30, 40, 50, 60]));

//4. Filter
//Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.
greatherThan70 = [];
const filter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >70) {
        greatherThan70.push(arr[i]);
    }
  }
  return greatherThan70;
};
console.log(filter([3,62,234,7,23,74,23,76,92]));

//5. Geometrizer
// Create two functions that calculate the properties of a circle.
// Create a function called calcCircumfrence:
//     Pass the radius to the function.
//     Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:
//     Pass the radius to the function.
//     Calculate the area based on the radius, and output "The area is NN".
function calcCircumfrence(radius) {
    let y = (Math.PI * radius) * 2;
  console.log("The circumfrence is " + y + ".");
  }
  function calcArea(radius) {
    let x = (Math.PI * radius) * radius;
  console.log("The area is " + x + ".");
  }
  
  calcCircumfrence(30);
  calcArea(10);