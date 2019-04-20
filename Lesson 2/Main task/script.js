'use strict';

let budgetForAMonth = +prompt("Какой бюджет на месяц?", "0"),
    timeData = prompt("Введите сегодняшнюю дату в формате YYYY-MM-DD", ""),
    budgetForADay = 0;

let appData = {
    budget: budgetForAMonth,
    date: timeData,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

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

budgetForADay = appData.budget / 30;
alert("Ваш дневной бюджет составляет: " + budgetForADay.toFixed() + "рублей");
console.log(appData);