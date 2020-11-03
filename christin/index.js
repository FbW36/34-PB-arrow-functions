// 1. Multiply
//Multiply two numbers and return the result using an arrow function.

const multiply = (a, b) => {
  sum = a * b;
  return sum;
};

console.log("1.multiply:", multiply(3, 5)); // 15

// 2. Double The Odds
//Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.

let numbers = [3, 5, 67, 12, 34, 4, 9, 30];

const doubleOdds = () => {
  let odds = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      odds.push(numbers[i] * 2);
    }
  }
  return odds;
};
console.log("2.odds:", doubleOdds()); // 2.odds: [ 6, 10, 134, 18 ]

//3. 3. Loopyloop
//Given an array of numbers, loop through the array and subract 10 from each element using an arrow function.Return the new array.

let array = [34, 7, 88, 54, 66];

const loopyLoop = () => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(array[i] - 10);
  }
  return newArray;
};
console.log("3. loopyLoop", loopyLoop()); // [ 24, -3, 78, 44, 56 ]

// 4. Filter
//Given this array: [3, 62, 234, 7, 23, 74, 23, 76, 92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.

array2 = [3, 62, 234, 7, 23, 74, 23, 76, 92];

const arrayFilter = () => {
  let arrayFilter = [];
  for (i = 0; i < array2.length; i++) {
    if (array2[i] > 70) {
      arrayFilter.push(array2[i]);
    }
  }
  return arrayFilter;
};

console.log("4. arrayFilter:", arrayFilter());

// 5. Geometrizer
//Create two functions that calculate the properties of a circle.

//Create a function called calcCircumfrence:
//Pass the radius to the function.
//Calculate the circumference based on the radius, and output "The circumference is NN".

const calcCircumfrence = (radius) => {
  let circumfrence = 2 * 3.14 * radius;
  return `The circumfrence is ${circumfrence}`;
};
console.log("circumfrence:", calcCircumfrence(4));

//Create a function called calcArea:
//Pass the radius to the function.
//Calculate the area based on the radius, and output "The area is NN".

const calcArea = (radius) => {
  let area = 3.14 * radius ** 2;
  return ` The area is ${area}`;
};
console.log("area", calcArea(4));
