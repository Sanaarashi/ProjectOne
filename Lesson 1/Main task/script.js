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
let expensesForAMonth = prompt("Введите обязательную статью расходов в этом месяце", ""),
    moneyForExpenses = +prompt("Во сколько обойдутся эти расходы?", "");
appData.expenses[expensesForAMonth] = moneyForExpenses;
}

budgetForADay = appData.budget / 30;
alert("Ваш дневной бюджет составляет: " + budgetForADay.toFixed() + "рублей");
console.log(appData);