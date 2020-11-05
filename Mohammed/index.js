
// 1. Multiply

let n1 = 5; 
let n2 = 7;

let multiplyNum = (n1, n2) => n1 * n2;

console.log(`Ex. No. 1: Multiplication of ${n1} x ${n2} ==> ${multiplyNum(n1, n2)}`);

// ===========================================================

// 2. Double The Odds

let givenArray = [3, 5, 67, 12, 34, 4, 9, 30];

let oddFilterFunction = givenArray =>
{
    let oddNumbersArr = [];
    let j = 0;

    for (let i=0; i<givenArray.length; i++)
    {
        if ( (givenArray[i] % 2) !== 0 )
        {
            oddNumbersArr[j] = givenArray[i] * 2;
            j++;
        }
    }

    return oddNumbersArr;
}

console.log(`Ex. No. 2: The given array [${givenArray}] is filtered into the following array of odd numbers multiplied by 2 ==> [${oddFilterFunction(givenArray)}] `);

// ============================================================

// 3. Loopyloop

let givenArr2 = [20, 5, 17, 10, 7];

let subtractorFunction = givenArr2 =>
{
    for (let i=0; i<givenArr2.length; i++)
    {
        givenArr2[i] = givenArr2[i] -10;
    }

    return console.log(`Ex. No. 3: The updated array after reducing 10 from all of its elements is ==> ${givenArr2}`);
}

subtractorFunction(givenArr2);

// ====================================================

// 4.

let givenArr3 = [3,62,234,7,23,74,23,76,92];

let numbersGrT_70 = givenArr3.filter( x => x >= 70);

console.log(`Ex. No. 4: The given array is [${givenArr3}] The resulting array holds all numbers that are greater than 70 ==> [${numbersGrT_70}]`);


// =====================================================

// 5.

let r = 5;
let PI = 1.4

// circumference=2*PI*r
let calcCircumference = r => 2 * PI * r;

// area = PI*r*r
let calcArea = r => PI * r * r;

//calcCircumference(r);
console.log(`Ex. No. 5: \nThe circumterence is ==> ${calcCircumference(r)}`);
console.log(`The area is ==> ${calcArea(r)}`);