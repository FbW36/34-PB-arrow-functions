//1
const multiply = (num1,num2) =>  num1*num2;

console.log("1==>",multiply(2,4));

//2
const doubleOdds = () =>{
    const array = [3, 5, 67, 12, 34, 4, 9, 30]
    const arrayOdd = []
    for (i=0;i<array.length;i++){
        if(array[i] % 2 !== 0){
           arrayOdd.push(array[i]*2);
        }
    }
    return arrayOdd;
}

console.log("2==>", doubleOdds());

//3
const loopyLoop = (array) =>{
    const newArray = [];
    for(i=0;i<array.length;i++){
        newArray.push(array[i]-10);
    }
    return newArray;
}

console.log("3==>", loopyLoop([25, 76, 87, 32, 45, 12,]));

//4
givenArray = [3,62,234,7,23,74,23,76,92]

const filter = ()=>{
    const greater70 = [];
    for(i=0;i<givenArray.length;i++){
        if(givenArray[i]>70){
            greater70.push(givenArray[i])
        }
    }
    return greater70;
}

console.log(filter());

//5
const calcCircumference = (radius) => (2*Math.PI)*radius;
console.log("The circumferece is", calcCircumference(5));

const calcArea = (radius) => Math.PI*(radius*radius);
console.log("the area is", calcArea(3));