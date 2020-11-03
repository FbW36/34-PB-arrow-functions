//Multiply two numbers and return the result using an arrow function.

const foo1 = (x, y) => x * y;
console.log("foo1 ==> ", foo1(10, 4));

// 2. Given any array of
//numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30],
//filter the odd numbers into a new array and
//multiply each odd number by 2.

const findOddnum = (number) => {
  let empty = [];
  let multiply;
  for (i = 0; i < number.length; i++) {
    if (number[i] % 2 !== 0) {
      multiply = number[i] * 2;
      console.log(multiply);
      empty.push(multiply);
    }
  }
  return empty;
};
console.log("findOddnum", findOddnum([3, 5, 67, 12, 34, 4, 9, 30]));

// Given an array of numbers,
// loop through the array and subract 10
// from each element using an arrow function.
// Return the new array.

const Loopyloop = (givenArray) => {
  let emptyArray = [];
  for (i = 0; i < givenArray.length; i++) {
    emptyArray.push(givenArray[i] - 10);
  }
  return emptyArray;
};

console.log("Loopyloop =", Loopyloop([20, 30, 40]));

// 4 . Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70.
//Store the result into a variable.

const myResult = (givArr) => {
  emptyArr = [];
  for (i = 0; i < givArr.length; i++) {
    if (givArr[i] > 70) {
      emptyArr.push(givArr[i]);
    }
  }
  return emptyArr;
};
console.log("myResult=", myResult([3, 62, 234, 7, 23, 74, 23, 76, 92]));

// 5. Calculate the circumference
const calcCircumfrence = (radius) => {
  circumference = Math.round(Math.PI * (radius * 2));
  return `the circumference is ${circumference}`;
};

console.log(calcCircumfrence(7));

// Calculate the area
const calcArea = (radius) => {
  area = Math.round(Math.PI * Math.pow(radius, 2));
  return `The area is ${area}`;
};

console.log(calcArea(7));
