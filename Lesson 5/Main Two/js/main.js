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
    acceptExpBtn = document.querySelector('.expenses-item-btn'),
    acceptOptExpBtn = document.querySelector('.optionalexpenses-btn'),
    calculateBtn = document.querySelector('.count-budget-btn'),
    optionalexpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome= document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sumOfSavings= document.querySelector('#sum'),
    percentofSavings = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');