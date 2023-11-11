# BudgetGI
GI Week 9

To work with the budget tracker:

-Enter income values in the "Income Amount" input field and click "Add Income" to update the total income.
-Enter expense details in the "Expenses Amount" and "Description" input fields and click "Add Expenses" to update the expenses and remaining budget.

Inculded in my JavaScript:
-Classes:
    -Income: Represents income items and has a method add(amount) to update the income amount.
    -Expenses: Represents expense items and is initialized with a description and amount.
    -Budget: Main class that integrates Income and Expenses. It has methods to add expenses, delete expenses, and calculate the total income, total expenses, and budget balance.

Event Listeners:
    -Event listeners for the "Add Income" and "Add Expenses" buttons.

Adding Income:
-When the "Add Income" button is clicked, the application reads the income amount from the input field. It then updates the total income, clears the input field, and updates the displayed budget information.

Adding Expenses:
-When the "Add Expenses" button is clicked, the application reads the description and amount from the input fields. It creates a new Expenses object with the provided details, clears the input fields, and updates the budget information.

Displayed Information:
The application displays the total income, total expenses, and the remaining budget on the webpage.