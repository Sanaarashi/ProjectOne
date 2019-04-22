'use strict';

let budgetForAMonth, timeData, budgetForADay;

function start() {
    budgetForAMonth = +prompt("Какой бюджет на месяц?", "0");
    timeData = prompt("Введите сегодняшнюю дату в формате YYYY-MM-DD", "");

    while (isNaN(budgetForAMonth) || budgetForAMonth == null || budgetForAMonth == "") {
        budgetForAMonth = +prompt("Какой бюджет на месяц?", "0")
    }

}
start();

let appData = {
        budget: budgetForAMonth,
        date: timeData,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    },
    optionalExpenses = {};

function detectDayBudget() {
    budgetForADay = 0;
    appData.budgetForADay = (appData.budget / 30).toFixed();
    alert("Ваш дневной бюджет составляет: " + appData.budgetForADay + "рублей");
}
detectDayBudget();

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let expensesForAMonth = prompt("Введите обязательную статью расходов в этом месяце", ''),
            moneyForExpenses = +prompt("Во сколько обойдутся эти расходы?");

        if ((typeof (expensesForAMonth)) == 'string' &&
            (typeof (expensesForAMonth)) != null &&
            expensesForAMonth != '' &&
            (typeof (moneyForExpenses)) != null &&
            isNaN(moneyForExpenses) != true &&
            moneyForExpenses != '') {
            console.log('done');
            appData.expenses[expensesForAMonth] = moneyForExpenses;
        } else {
            i--;
        }
    };
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let optExpensesForAMonth = prompt("Введите необязательную статью расходов в этом месяце", ''),
            moneyForOptExpenses = +prompt("Во сколько обойдутся эти расходы?");

        if ((typeof (optExpensesForAMonth)) == 'string' &&
            (typeof (optExpensesForAMonth)) != null &&
            optExpensesForAMonth != '' &&
            (typeof (moneyForOptExpenses)) != null &&
            isNaN(moneyForOptExpenses) != true &&
            moneyForOptExpenses != '') {
            console.log('done');
            optionalExpenses[i] = moneyForOptExpenses;
        } else {
            i--;
        }
    };
}
chooseOptExpenses();

// let i = 0;
// while (i < 2) {
//     let expensesForAMonth = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         moneyForExpenses = +prompt("Во сколько обойдутся эти расходы?", '');

//     if ((typeof (expensesForAMonth)) == 'string' &&
//         (typeof (expensesForAMonth)) != null &&
//         expensesForAMonth != '' &&
//         (typeof (moneyForExpenses)) != null &&
//         isNaN(moneyForExpenses) != true &&
//         moneyForExpenses != '') {
//         console.log('done');
//         appData.expenses[expensesForAMonth] = moneyForExpenses;
//     }
// };

// do {
//     let expensesForAMonth = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         moneyForExpenses = prompt("Во сколько обойдутся эти расходы?", '');

//     if ((typeof (expensesForAMonth)) == 'string' &&
//         (typeof (expensesForAMonth)) != null &&
//         expensesForAMonth != '' &&
//         (typeof (moneyForExpenses)) != null &&
//         isNaN(moneyForExpenses) != true &&
//         moneyForExpenses != '') {
//         console.log('done');
//         appData.expenses[expensesForAMonth] = moneyForExpenses;
//     }
// } while (i < 1);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function detectLevel() {
    if (appData.budgetForADay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.budgetForADay > 100 && appData.budgetForADay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.budgetForADay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

console.log(appData);
console.log(optionalExpenses);