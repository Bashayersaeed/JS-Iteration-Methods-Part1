const numbers = [10, 13, 20, 25, 38, 35, 40];

// TASK 1 - Filtering
// 1) Array >= 25

const GreaterThanTwnityFive = numbers.filter(function (num){
    return num >= 25; 
});
// console.log(GreaterThanTwnityFive);

//2) Array % 5
GreaterThanTwnityFive = numbers.filter(function (num){
    return num % 5;
}); 
// console.log(GreaterThanTwnityFive);

//TASK 2
// 3) Each number Sqaured
squares = numbers.map ((number) =>  number * number);

// console.log(squares);

//4) * 2
TimesTwo = numbers.map(function(number){
    return number * 2;
})
// console.log (TimesTwo);

//Task 3
//5) A- Filter >=20
//   B- Map square each

const GreaterThanTwinty = numbers.filter(function (num){
    return num >= 20;
});
// console.log (GreaterThanTwinty);

square = GreaterThanTwinty.map(function(number){
    return number * number;
})
// console.log (square);

// 6) A- filter % 5
//    B- * 3

DivisibleByFive = numbers.filter(function(num){
    return num % 5;
});
// console.log(DivisibleByFive);

multipleByThree = DivisibleByFive.map(function(num){
    return num * 3;
});
// console.log(multipleByThree);

//Challenge
// logger(array)
// *
// * - Accepts an array
// * - Logs every element of the array

const logger = function (array) {
    array.forEach(function(element){
        console.log(element);
    });
}
logger([32,33,,34]);
