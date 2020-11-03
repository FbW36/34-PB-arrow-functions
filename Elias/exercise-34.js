// 1. Multiply
let sum;
const multiply = (val) => {
    val = 3 * 4; return val;}

console.log(multiply(sum));

// 2. Double The Odds
const arrayOfNumbers = [3, 5, 67, 12, 34, 4, 9, 30];

const oddNumberMultiplier = () => {
    const oddNumberArray = [];
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 !== 0) {
            oddNumberArray.push(arrayOfNumbers[i] * 2);
        }
    }
    return oddNumberArray;
}

console.log(oddNumberMultiplier());// [ 6, 10, 134, 18 ]

// 3. Loopyloop
const anotherArrayOfNumbers = [1,2,3,4,5,6,7,8,9,78,6,5,34,5,3,5];

const subtractorFuction = () => {
    const subtractedNumbersArray = [];
    for (let i = 0; i < anotherArrayOfNumbers.length; i++) {
        subtractedNumbersArray.push(anotherArrayOfNumbers[i] - 10);
    }
    return subtractedNumbersArray;
}

console.log(subtractorFuction());

//  4. Filter
const yetAnotherArrayOfNumbers = [3,62,234,7,23,74,23,76,92];

const filterNumbersGreaterThanSeventy = () => {
    const filteredNumbersArray = yetAnotherArrayOfNumbers.filter((e,i) => e > 70);
    return filteredNumbersArray;
    }

    console.log(filterNumbersGreaterThanSeventy());

// 5. Geometrizer
const calcCircumfrence = (radius) => {
    let sum = 2 * Math.PI * radius;
    return `The circumfrence is ${Math.round(sum)} cm`;
}

console.log(calcCircumfrence(50));

const calcArea = (radius) => {
    let sum = Math.PI * Math.sqrt(radius);
    return `The area is ${Math.round(sum)} cm`;
}

console.log(calcArea(50))