//Task 1 - Flexible String Manipulation with Functions
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let formatNameBtn = document.getElementById("formatNameBtn");
let formatList = document.getElementById("formatList");

function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input";
  }

  let formattedFirstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1);
  let formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${formattedLastName}, ${formattedFirstName}`;
}
//Adds an event listener to the button
formatNameBtn.addEventListener("click", function () {
  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  formatList.innerHTML = `<li>${formatFullName(firstName, lastName)}</li>`;
});

// console.log(formatFullName("sangeetha", "prabu")); //the first letter of each is always capatilized
// console.log(formatFullName("sangeetha", "")); //last name is missing "Invalid name input."

//Task 2: Mathematical Operations with Multiple Parameters

let priceInput = document.getElementById("price");
let quantityInput = document.getElementById("Quantity");
let taxRateInput = document.getElementById("taxRate");
let totalCostBtn = document.getElementById("totalCostbtn");
let calculateTotal = document.getElementById("CalculatedTotalCost");

function calculateTotalCost(price, quantity, taxRate) {
  if (price < 0 || quantity < 0 || taxRate < 0) {
    return "Invalid input.";
  }

  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    return "Invalid input.";
  }
  return price * quantity * (1 + taxRate);
}
//Adds an event listener to the button
totalCostBtn.addEventListener("click", function () {
  let price = parseFloat(priceInput.value);
  let quantity = parseFloat(quantityInput.value);
  let taxRate = parseFloat(taxRateInput.value);
  calculateTotal.value = calculateTotalCost(price, quantity, taxRate);
});

// console.log(calculateTotalCost(10, 5, 0.1)); // Total cost included price ,quantity , taxrate
// console.log(calculateTotalCost(10, -5, 0.1)); // invalid quantity
// console.log(calculateTotalCost(10, "yes", 0.1)); // invalid quantity

// Task 3: Conditional Logic with Multiple Parameters

let ageInput = document.getElementById("age");
let isEmployedInput = document.getElementById("isEmployed");
let eligibilityBtn = document.getElementById("eligibilitybtn");
let eligibilityMessage = document.getElementById("eligibility");

function checkEligibility(age, isEmployed) {
  let message = "";

  // Convert string "true"/"false" to boolean if needed
  if (typeof isEmployed === "string") {
    isEmployed = isEmployed.toLowerCase() === "true";
  }

  if (age >= 18 && isEmployed === true) {
    message = "They are eligible";
  } else if (age >= 18 && isEmployed === false) {
    message = "They are conditionally eligible";
  } else {
    message = "They are not eligible";
  }
  return message;
}

eligibilityBtn.addEventListener("click", function () {
  let age = parseFloat(ageInput.value);
  let isEmployed = isEmployedInput.value;
  eligibilityMessage.value = checkEligibility(age, isEmployed);
});
// console.log(checkEligibility(20, true));
// console.log(checkEligibility(24, false));
// console.log(checkEligibility(17, false));

//Task:4 Refactoring for Reusability

let priceInput4 = document.getElementById("price4");
let quantityInput4 = document.getElementById("Quantity4");
let taxRateInput4 = document.getElementById("taxRate4");
let discountInput4 = document.getElementById("discount4");
let totalCostBtn4 = document.getElementById("totalCostbtn4");
let calculateTotal4 = document.getElementById("CalculatedTotalCost4");

function calculateTotalCost(price, quantity, taxRate, discount) {
  if (price < 0 || quantity < 0 || taxRate < 0) {
    return "Invalid input.";
  }
  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    return "Invalid input.";
  }
  if (isNaN(discount)) {
    return price * quantity * (1 + taxRate);
  } else {
    return (price * quantity - discount) * (1 + taxRate);
  }
}

//Adds an event listener to the button
totalCostBtn4.addEventListener("click", function () {
  let price = parseFloat(priceInput4.value);
  let quantity = parseFloat(quantityInput4.value);
  let taxRate = parseFloat(taxRateInput4.value);
  let discount = parseFloat(discountInput4.value);
  calculateTotal4.value = calculateTotalCost(price,quantity,taxRate,discount);
});
