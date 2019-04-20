'use strict';

let date = new Date(),
    newDate = date.getDay(),
    daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    arrayWithNumbers = ["322042", "4210", "8832", "7993292", "99232", "143222234", "3255532"];

arrayWithNumbers.forEach(element => {
    if (element.slice(0, 1) == 3 || element.slice(0, 1) == 7) {
        console.log(element);
    }
});

function showDays() {
    let div = document.createElement("div"),
        paragraph,
        temp = 1;
    div.id = 'main-div';
    document.body.appendChild(div);
    for (let i = 0; i < daysOfTheWeek.length; i++) {
        paragraph = document.createElement('p');
        paragraph.innerHTML = `${daysOfTheWeek[i]}`;
        div.appendChild(paragraph);
        if (paragraph.innerHTML == "Saturday" || paragraph.innerHTML == "Sunday") {
            paragraph.style.cssText = "font-weight: bold";
        }
        if (temp == newDate && (newDate == 6 || newDate == 7)) {
            paragraph.style.cssText = "font-weight: bold; font-style: italic";
        } else if(temp == newDate) {
            paragraph.style.cssText = "font-style: italic";
        }
        temp++;
    }
};