//1. multiply: Multiply two numbers and return the result using an arrow function.

const multiply = (x, y) => {
    return x * y;
  };
  console.log("multiply ==> ", multiply(333, 666)); // 221778

  //2.double the odds: Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], 
  //filter the odd numbers into a new array and multiply each odd number by 2.

  const doubleOdds = (arrayOfNums) => {
    const newArrayOfNums = [];
    let doubleNum;
    for (let i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] % 2 !== 0) {
        doubleNum = arrayOfNums[i] * 2;
        newArrayOfNums.push(doubleNum);
      }
    }
    return newArrayOfNums;
  };
  
  console.log("doubleOdds ==> ",doubleOdds([3, 5, 67, 12, 34, 4, 9, 30])); //[ 6, 10, 134, 18 ]

  //3. Loopyloop - Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.

  const subtractOnArray = (arrayOfNums) => {
    const newArrayOfNums = [];
    for (let i = 0; i < arrayOfNums.length; i++) {
      newArrayOfNums.push(arrayOfNums[i] - 10);
    }
    return newArrayOfNums;
  };
  
  console.log(`subtractOnArray ==> `, subtractOnArray([5, 25, 46, 72, 1])); //subtractOnArray ==>  [ -5, 15, 36, 62, -9 ]


  //4. Filter Given this array: [3, 62, 234, 7, 23, 74, 23, 76, 92], use the array filter method and an arrow function to create an array of the numbers greater than`70`.Store the result into a variable.

const filterBiggerThenSeventy = (arrayOfNums) => {
    const newArray = [];
    for (let i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i] >= 70) {
        newArray.push(arrayOfNums[i]);
      }
    }
    return newArray;
  };
  console.log(
    "filterBiggerThenSeventy ==>",
    filterBiggerThenSeventy([3, 62, 234, 7, 23, 74, 23, 76, 92]) //filterBiggerThenSeventy ==> [ 234, 74, 76, 92 ]
  );

  // 5. Geometrizer Create two functions that calculate the properties of a circle.
// Create a function called calcCircumfrence:
// * Pass the radius to the function.
// * Calculate the circumference based on the radius, and output "The circumference is NN".
//circle circumference 2*pi*radius
const calcCircumfrence = (radius) => {
    circumference = 2* Math.PI * radius;
    return `the circumference is ${circumference}`;
  };
  
  console.log(calcCircumfrence(333));
  
  // Create a function called calcArea:
  // * Pass the radius to the function.
  // * Calculate the area based on the radius, and output "The area is NN".
//circle Area =  pi*radius^2

  const calcArea = (radius) => {
    area = Math.PI * Math.pow(radius, 2);
    return `The area is ${area}`;
  };
  
  console.log(calcArea(333));
  