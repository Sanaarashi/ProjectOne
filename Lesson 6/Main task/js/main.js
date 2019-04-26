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
    necessaryExp = document.getElementsByClassName('expenses-item'),
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

let budgetForAMonth, timeData, isThereOptExp = false;

startBtn.addEventListener('click', function () {
    timeData = prompt("Введите сегодняшнюю дату в формате YYYY-MM-DD", "");
    budgetForAMonth = +prompt("Какой бюджет на месяц?", "0");

    while (isNaN(budgetForAMonth) || budgetForAMonth == null || budgetForAMonth == "") {
        budgetForAMonth = +prompt("Какой бюджет на месяц?", "0")
    }
    appData.budget = budgetForAMonth;
    appData.date = timeData;
    budgetValue.textContent = budgetForAMonth.toFixed();
    year.value = new Date(Date.parse(timeData)).getFullYear();
    month.value = new Date(Date.parse(timeData)).getMonth() + 1;
    day.value = new Date(Date.parse(timeData)).getDate();
    appData.isBudgetCalculated = true;
});

acceptExpBtn.addEventListener('click', function () {
    for (let i = 0; i < necessaryExp.length; i++) {
        if (appData.necessaryExp[i] == undefined) {
            acceptExpBtn.setAttribute('disabled', 'disabled');
        }
    }
});


necessaryExp[1].addEventListener('input', function() {
    necessaryExp[1].value = necessaryExp[1].value.replace(/[^0-9\.]/g, '');
});

necessaryExp[3].addEventListener('input', function() {
    necessaryExp[3].value = necessaryExp[3].value.replace(/[^0-9\.]/g, '');
});


acceptExpBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < necessaryExp.length; i++) {
        let expensesForAMonth = necessaryExp[i].value,
            moneyForExpenses = necessaryExp[++i].value;

        if ((typeof (expensesForAMonth)) == 'string' &&
            (typeof (expensesForAMonth)) != null &&
            expensesForAMonth != '' &&
            (typeof (moneyForExpenses)) != null &&
            isNaN(moneyForExpenses) != true &&
            moneyForExpenses != '') {
            appData.expenses[expensesForAMonth] = moneyForExpenses;
            sum += +moneyForExpenses;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
    appData.isExpCalc = true;
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

calculateBtn.addEventListener('mouseenter', function () {
    if (appData.isBudgetCalculated == true && appData.isExpCalc == true) {
        calculateBtn.removeAttribute('disabled', 'disabled');
    } else {
        calculateBtn.setAttribute('disabled', 'disabled');
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
    isExpCalc: false
};

bgImg.style.backgroundImage = 'url(img/money.jpg)';