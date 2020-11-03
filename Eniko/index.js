// 1. Multiply
// Multiply two numbers and return the result using an arrow function.
const multiplier = (x, y) => x * y;
console.log(multiplier(11, 111));

// 2. Double The Odds
// Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.
let arr1 = [3, 5, 67, 12, 34, 4, 9, 30];
const multiplyTheOdds = (str) => {
    let odds = []
    for (let i = 0; i < str.length; i++){
        if (i % 2 !== 0) {
            odds.push(str[i] * 2)
        }
    }
    return odds
}
console.log(multiplyTheOdds(arr1));

// 3. Loopyloop
// Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.
const minusTen = (str) => {
    let result = []
    for (let i = 0; i < str.length; i++){
            result.push(str[i] - 10)
    }
    return result
}
console.log(minusTen(arr1));

// 4. Filter
// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than 70. Store the result into a variable.
const arr2 = [3,62,234,7,23,74,23,76,92];
const biggerThan70 = (str) => {
    let result = []
    for (let i = 0; i < str.length; i++){
        if (str[i] > 70) {
            result.push(str[i])
        }
    }
    return result
}
console.log(biggerThan70(arr2));

// 5. Geometrizer
// Create two functions that calculate the properties of a circle.
const calcCircumfrence = (r) => r * 2 * 3.14;
console.log("The circumference", calcCircumfrence(5));
const calcArea = (r) => calcCircumfrence(r) / 2 * r;
console.log("he area is", calcArea(5));


// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".