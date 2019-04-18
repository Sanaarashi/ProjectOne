'use strict';

let number = 33721,
    newNumber = 0;

newNumber = number.toString().split("").reduce(function (newNumber, current) {
   return +newNumber * +current;
}) ** 3;

console.log(newNumber);

alert(newNumber.toString().slice(0,2));