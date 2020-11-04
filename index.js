// 1. Multiply two numbers and return the result using an arrow function.
const multiply = (x, y) => x * y;
console.log("multiply ==>", multiply(10, 10)); // 100

// 2. Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.

let arr1 = [3, 5, 67, 12, 34, 4, 9, 30];
const multiplyOdds = arr1 => {
    let odds = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 !== 0) {
            odds.push(arr1[i] * 2)
        }
    }
    return odds
}
console.log("multiplyOdds ==>", multiplyOdds(arr1));

// 3. Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.
// let arr1 = [3, 5, 67, 12, 34, 4, 9, 30]; ==> taken from privious exercise 

const subtractTen = arr1 => {
    const subtractArr = [];
    for (let i = 0; i < arr1.length; i++) {
        subtractArr.push(arr1[i] - 10);
    }
    return subtractArr
}
console.log("subtractTen==>", subtractTen(arr1)); // ==> [ -7, -5, 57, 2, 24, -6, -1, 20 ]

// 4. Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.

const arryFilter = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const arrFunction = arr => {
    const filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 70) {
            filterArr.push(arr[i]);
        }
    }
    return filterArr
}
console.log("arryFilter ==>", arrFunction(arryFilter)); // ==> [ 234, 74, 76, 92 ]



/*  5. Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN" */


const calcCircumference = (radius) => (2 * Math.PI) * radius;
console.log("The circumferece is", calcCircumference(5));

const calcArea = (radius) => Math.PI * (radius * radius);
console.log("the area is", calcArea(3));