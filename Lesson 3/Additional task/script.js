'use strict';

let str = "урок-3-был слишком легким";

console.log(str[0].toUpperCase() + str.slice(1).replace(/-/gi, " "));
alert(str.slice(-6,-2) + "о");

let arr = [20, 33, 1, "Human", 2, 3];

console.log((Math.sqrt((arr.filter( (obj) => { return typeof(obj) === 'number'; } ).sort().reduce( (a,b) => (a + b**3) )))).toFixed());

function getString() {
    let str = prompt("Введите предложение");
    if (typeof(str) === 'string' && str != null && str != "") {
        str.trim();
        if (str.length > 50) {
            console.log(str.slice(50) + "...");
        } else {
            console.log(str);
        }
    } else {
        str = prompt("Введите предложение");
    }
}

getString();