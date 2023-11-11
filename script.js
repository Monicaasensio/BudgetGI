class Income {
    constructor(description) {
        this.description = description;
        this.amount = 0; //sets initial amount to 0
    }

    //creates method with parameter of amount to update amount with the addition value
    add(amount) {
        this.amount += amount; //shorthand to add new amount to this.amount and set equal to this.amount
    }
}

class Budget {
    constructor() {
        this.income = new Income(); //creates new instance of Income and assigns it to income property in Budget class
        this.expenses = []; //empty array
    }

    addExpenses(expense) {
        this.expenses.push(expense); //method to add new expenses to last of array
    }

    deleteExpenses(i) { //method to remove expenses from array
            this.expenses.splice(i, 1); //splice method removes element from array, i = index of expense to delete, 1 is how many elements to remove
    }

    calculateTotalIncome() {
        return this.income.amount; //sets total income = to income amount 
    }

    calculateTotalExpenses() { //reduce method iterates over elements of array and = a single result
        return this.expenses.reduce((total, expense) => total + expense.amount, 0); //callback function, for each expense it adds the amount to the total. 0 is initial value for total
    }

    calculateBudget() {
        return this.income.amount - this.calculateTotalExpenses(); //equation to find remaining budget
    }
}

class Expenses {
    constructor(description, amount) {
        this.description = description;
        this.amount = amount;
    }
}


document.addEventListener("DOMContentLoaded", function () { //listener refers to document object in DOM and executes func when event occurs
    const incomeInput = document.getElementById("income-amount");
    const incomeDescription = document.getElementById("income-des")
    const addIncomeBtn = document.getElementById("addIncomeButton");
    const incomeResult = document.getElementById("income-result");
    const expensesInput = document.getElementById("expenses-amount");
    const expensesDescription = document.getElementById("expenses-des")
    const addExpensesBtn = document.getElementById("addExpensesBtn");
    const expensesResult = document.getElementById("expenses-result");
    const budgetResult = document.getElementById("budget-result");

    const budget = new Budget();

    addIncomeBtn.addEventListener("click", function () {
        const description = incomeDescription.value;
        const incomeAmount = parseFloat(incomeInput.value);
        if (!isNaN(incomeAmount)) {
            budget.income.add(incomeAmount);
            incomeResult.innerHTML = budget.calculateTotalIncome().toFixed(2);
            incomeDescription.value = '';
            incomeInput.value = '';
            updateBudget();
        }

});

addExpensesBtn.addEventListener("click", function () {
    const description = expensesDescription.value;
    const expensesAmount = parseFloat(expensesInput.value);
    if (!isNaN(expensesAmount)) {
        const expense = new Expenses(description, expensesAmount);
        budget.addExpenses(expense);
        expensesDescription.value = '';
        expensesInput.value = '';
        updateBudget();
    }
});

    function updateBudget() {
        incomeResult.innerHTML = `Total Income: $${budget.calculateTotalIncome().toFixed(2)}`
        expensesResult.textContent = `Total Expenses: $${budget.calculateTotalExpenses().toFixed(2)}`;
        budgetResult.textContent = `Total Income: $${budget.calculateBudget().toFixed(2)}`;
    }

});
