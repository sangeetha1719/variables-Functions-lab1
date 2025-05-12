Lab:1 Variables and Functions

Task 1:
-Flexible String Manipulation with Functions
-Created a function called formatFullName that has two parameters: firstName and lastName.
The function should return the full name in format lastName, firstName.
-Formatted the firstName and lastName so that the first letter of each is capatilized.
-Added a condition that checks if either the first or last name is missing. It will return a string saying “Invalid name input.”

Task 2: Mathematical Operations with Multiple Parameters
-Written a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
-The function calculated the total cost of items, including tax, Used the formula: totalCost = (price _ quantity) _ (1 + taxRate).
-Ensured that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”

Task 3: Functions with Conditional Logic
-Written a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
-If the person is over 18 and employed, they are eligible.
-If the person is over 18 but unemployed, they are conditionally eligible.
-If the person is 18 or younger, they are not eligible.
-Returned an appropriate string message for each scenario.

Task 4: Refactoring for Reusability
-Refactored the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
-If no discount is provided, calculate the total cost as before.
