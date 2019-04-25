let points = document.querySelectorAll('.menu-item'),
    newHeader = document.getElementById('title'),
    newList = document.querySelector('.menu'),
    fifthPoint = document.createElement('li'),
    adv = document.querySelector(".adv"),
    divCol = document.querySelectorAll('.column'),
    opinion = document.getElementById('prompt');

newList.insertBefore(points[2], points[1]);
fifthPoint.innerText = 'Пятый пункт';
fifthPoint.classList.add('menu-item');
newList.appendChild(fifthPoint);

newHeader.innerText = "Мы продает только подлинную технику Apple";

divCol[1].removeChild(adv);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

opinion.innerText = prompt("Как ваше отношение к технике Apple?");