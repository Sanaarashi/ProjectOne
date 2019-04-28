'use strict';

let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingValue = document.querySelector('.yearsavings-value'),

    mainExp = document.querySelectorAll('.expenses-item'),
    acceptExpBtn = document.getElementsByTagName('button')[0],
    acceptOptExpBtn = document.getElementsByTagName('button')[1],
    calculateBtn = document.getElementsByTagName('button')[2],
    optionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sumOfSavings = document.querySelector('#sum'),
    percentofSavings = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    bgImg = document.querySelector('body');

let budgetForAMonth, timeData;

startBtn.addEventListener('click', function () {
    timeData = prompt("Введите сегодняшнюю дату в формате YYYY-MM-DD", "");
    budgetForAMonth = +prompt("Какой бюджет на месяц?", "0");

    while (isNaN(budgetForAMonth) || budgetForAMonth == null || budgetForAMonth == "") {
        budgetForAMonth = +prompt("Какой бюджет на месяц?", "0");
    }
    appData.budget = budgetForAMonth;
    appData.date = timeData;
    budgetValue.textContent = budgetForAMonth.toFixed();
    year.value = new Date(Date.parse(timeData)).getFullYear();
    month.value = new Date(Date.parse(timeData)).getMonth() + 1;
    day.value = new Date(Date.parse(timeData)).getDate();
    appData.isBudgetCalculated = true;

    appData.isStarted = true;
    acceptExpBtn.style.background = "green";
    acceptExpBtn.removeAttribute('disabled', 'disabled');
});

mainExp[1].addEventListener('input', function () {
    mainExp[1].value = mainExp[1].value.replace(/[^0-9\.]/g, '');
});

mainExp[3].addEventListener('input', function () {
    mainExp[3].value = mainExp[3].value.replace(/[^0-9\.]/g, '');
});

acceptExpBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < mainExp.length - 1; i++) {
        let a = mainExp[i].value,
            b = mainExp[++i].value;
        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '') {
            appData.expenses[a] = b;
            sum += +b;
        }
    }
    expensesValue.textContent = sum;
    if (sum > 0) {
        appData.isExpCalc = true;
    }
    if (appData.isBudgetCalculated == true && appData.isExpCalc == true) {
        calculateBtn.style.background = "green";
        calculateBtn.removeAttribute('disabled', 'disabled');
    };
});

mainExp.forEach((elem, i, arr) => {
    elem.addEventListener('input', () => {
        if ((arr[0].value !== '' && arr[1].value !== '' && (arr[2].value == '' && arr[3].value == '')) ||
        (arr[2].value !== '' && arr[3].value !== '' && (arr[0].value == '' && arr[1].value == ''))) { 
            acceptExpBtn.style.background ='green';
            acceptExpBtn.removeAttribute('disabled, disabled');
        } else if ( (arr[0].value == '') || (arr[1].value == '') || ((arr[2].value == '') || (arr[3].value == '')) ) {
            acceptExpBtn.style.background ='red';
            acceptExpBtn.setAttribute('disabled, disabled');
        }
    });
});


optionalExpenses.forEach((elem) => {
    elem.addEventListener('input', () => {
        elem.value = elem.value.replace(/[^а-я]/, '');
    });
});

acceptOptExpBtn.addEventListener('click', function () {
    optionalExpensesValue.textContent = "";
    for (let i = 0; i < optionalExpenses.length; i++) {
        let optExpensesForAMonth = optionalExpenses[i].value;
        if ((typeof (optExpensesForAMonth)) == 'string' &&
            (typeof (optExpensesForAMonth)) != null &&
            optExpensesForAMonth != '') {
            appData.optionalExpenses[i] = optExpensesForAMonth;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    }
});

calculateBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.budgetForADay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.budgetForADay;
        if (appData.budgetForADay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.budgetForADay > 100 && appData.budgetForADay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.budgetForADay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumOfSavings.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumOfSavings.value,
            percent = +percentofSavings.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentofSavings.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumOfSavings.value,
            percent = +percentofSavings.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: budgetForAMonth,
    date: timeData,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    isBudgetCalculated: false,
    isExpCalc: false,
    isStarted: false
};

startBtn.style.background = "green";

if (appData.isStarted == false) {
    acceptExpBtn.style.background = "red";
    acceptExpBtn.setAttribute('disabled', 'disabled');
}

if (appData.isBudgetCalculated == false && appData.isExpCalc == false) {
    calculateBtn.style.background = "red";
    calculateBtn.setAttribute('disabled', 'disabled');
};


bgImg.style.backgroundImage = 'url(img/money.jpg)';