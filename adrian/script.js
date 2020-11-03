//1
const multTwoNumbers = (num1, num2) => num1 * num2;

//2
let arrayOfNumbers = [3, 5, 67, 12, 34, 4, 9, 30];

let filteredArray = arrayOfNumbers
  .filter((num) => num % 2 !== 0)
  .map((num) => num * 2);

//3
let arrayOfNumbers2 = [1, 2, 3];

let numberLess10 = arrayOfNumbers2.map((num) => num - 10);

//4
let array3 = [3, 62, 234, 7, 23, 74, 23, 76, 92];
let greatersThan70 = array3.filter((num) => num > 70);

//5
function calcCircumference(radius) {
  return `The circumference is ${2 * Math.PI * radius}`;
}

function calcArea(radius) {
  return `The area is ${Math.PI * Math.pow(radius, 2)}`;
}
