window.addEventListener('DOMContentLoaded', () => {

    let time = document.querySelector('.time-value'),
        weekday = document.querySelector('.weekday-value'),
        dates = document.querySelectorAll('.date'),
        newDate = document.querySelector('.date-value');

    let t = setInterval(formatDate, 1000);

    function formatDate() {
        let timeNow = new Date();

        let hour = timeNow.getHours(),
            min = timeNow.getMinutes(),
            sec = timeNow.getSeconds(),
            day = timeNow.getDate(),
            month = timeNow.getMonth(),
            year = timeNow.getFullYear(),
            dayOfWeek = timeNow.getDay();
        month++;

        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }

        time.textContent = hour + "." + min + "." + sec + " " + day + "." + month + "." + year;

        switch (dayOfWeek) {
            case 0:
                weekday.textContent = "Воскресенье";
                break;
            case 1:
                weekday.textContent = "Понедельник";
                break;
            case 2:
                weekday.textContent = "Вторник";
                break;
            case 3:
                weekday.textContent = "Среда";
                break;
            case 4:
                weekday.textContent = "Четверг";
                break;
            case 5:
                weekday.textContent = "Пятница";
                break;
            case 6:
                weekday.textContent = "Суббота";
                break;
        }
    }

    dates.forEach((elem, i, arr) => {
        elem.addEventListener('input', () => {
                newDate.value = (Date.parse(arr[0].value) - Date.parse(arr[1].value)) / (1000*60*60*24);
                if (isNaN(newDate.value)) {
                    newDate.value = "Введите даты";
                }
        });
    });

});