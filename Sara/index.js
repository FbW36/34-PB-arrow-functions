// 1) Multiply two numbers and return the result using an arrow function.
const myArrowFunction = ((a, b) => a * b);

console.log("myArrowFunction ==>", myArrowFunction(2, 2)); // 4
console.log("myArrowFunction ==>", myArrowFunction(2, 10)); // 20

// 2) Given any array of numbers e.g. [3, 5, 67, 12, 34, 4, 9, 30], filter the odd numbers into a new array and multiply each odd number by 2.
const myArrowFunction2 = ((num) => {
    const box = [];
        for(let i = 0; i < num.length; i++){
            if(num[i] % 2 !== 0){
                box.push(num[i] * 2);
            }
        }
        return box; 
});
console.log("myArrowFunction2 ==> ", myArrowFunction2([3, 5, 67, 12, 34, 4, 9, 30])); // [ 6, 10, 134, 18 ]

// 3) Given an array of numbers, loop through the array and subract 10 from each element using an arrow function. Return the new array.
const myArrowFunction3 = ((num) => {
    const box = [];
        for(let i = 0; i < num.length; i++){
            box.push(num[i] - 10);
        }
        return box;
});
console.log("myArrowFunction3 ==>", myArrowFunction3([50, 40, 30 , 20, 10])); // [ 40, 30, 20, 10, 0 ]

// Given this array: [3,62,234,7,23,74,23,76,92], use the array filter method and an arrow function to create an array of the numbers greater than `70`. Store the result into a variable.
const myArrowFunction4 = ((num) => {
    const numbersGreaterThan70 = [];
        for(let i = 0; i < num.length; i++){
            if(num[i] > 70){
                numbersGreaterThan70.push(num[i]);
            }
        }
    return numbersGreaterThan70;
});
console.log("myArrowFunction4 ==>", myArrowFunction4([3,62,234,7,23,74,23,76,92])); // [ 234, 74, 76, 92 ]

//! with filter()
const numArr = [3,62,234,7,23,74,23,76,92];
const myArrowFunctionFilter = numArr.filter((item) => item > 70);
console.log("withFilter ==>", myArrowFunctionFilter ); // [ 234, 74, 76, 92 ]

//5
// Perimeter or the Circumference of the circle = 2 × π × R.
const calcCircumference = (radius) => (2 * Math.PI) * radius;
console.log("The circumferece is", calcCircumference(10));

// The area of a circle is pi times the radius squared (A = π r²).
const calcArea = (radius) => Math.PI * (radius * radius);
console.log("the area is", calcArea(10));




