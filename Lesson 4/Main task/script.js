'use strict';

let budgetForAMonth, timeData, budgetForADay, optionalExpenses;

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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let expensesForAMonth = prompt("Введите обязательную статью расходов в этом месяце", ''),
                moneyForExpenses = +prompt("Во сколько обойдутся эти расходы?");

            if ((typeof (expensesForAMonth)) == 'string' &&
                (typeof (expensesForAMonth)) != null &&
                expensesForAMonth != '' &&
                (typeof (moneyForExpenses)) != null &&
                isNaN(moneyForExpenses) != true &&
                moneyForExpenses != '') {
                appData.expenses[expensesForAMonth] = moneyForExpenses;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        budgetForADay = 0;
        appData.budgetForADay = (appData.budget / 30).toFixed();
        alert("Ваш дневной бюджет составляет: " + appData.budgetForADay + "рублей");
    },
    detectLevel: function () {
        if (appData.budgetForADay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.budgetForADay > 100 && appData.budgetForADay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.budgetForADay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optExpensesForAMonth = prompt("Введите необязательную статью расходов в этом месяце", '');

            if ((typeof (optExpensesForAMonth)) == 'string' &&
                (typeof (optExpensesForAMonth)) != null &&
                optExpensesForAMonth != '') {
                appData.optionalExpenses[i] = optExpensesForAMonth;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items,
            i = 1;
        while ((typeof (items)) != 'string' || (typeof (items)) == 'number' ||
            (typeof (items)) == null || items == '') {
            items = prompt("Что принесет лополнительный доход? (Перечислите через запятую)", "");
        }
        appData.income = items.split(', ');
        appData.income.sort();
        appData.income.forEach(element => {
            alert("Способы доп. заработка: " + i + ") " + element);
            i++;
        });
    }
};

for (let keys in appData) {
    console.log("Наша программа включает в себя данные: " + keys + ": " + appData[keys]);
};




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