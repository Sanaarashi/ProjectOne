'use strict';

let date = new Date();
let newDate = date.getDay();

let daysOfTheWeek = ["Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

let arrayWithNumbers = ["322042",
    "4210",
    "8832",
    "7993292",
    "99232",
    "143222234",
    "3255532"
];

arrayWithNumbers.forEach(element => {
    let i = element.slice( 0,1);
    if (i == 3 || i == 7) {
        console.log(element);
    }
});

function showDays() {
    let arr = document.getElementsByTagName('p');
    for (let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = daysOfTheWeek[i];
        if (i == 5 || i == 6) {
            arr[i].innerHTML = `<b>${daysOfTheWeek[i]}</b>`;
        }
        if (newDate == 6 || newDate == 7) {
            arr[newDate - 1].innerHTML = `<b><i>${daysOfTheWeek[newDate-1]}</i></b>`;
        } else {
            arr[newDate - 1].innerHTML = `<i>${daysOfTheWeek[newDate-1]}</i>`;
        };
    }
};