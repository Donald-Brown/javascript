// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide reluts
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate results
function calculateResults() {
  // UI variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monhtly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    // Show results
    document.getElementById("results").style.display = "block";

    // Hide spinner
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
}

// Show error
function showError(error) {
  // Show results
  document.getElementById("results").style.display = "none";

  // Hide spinner
  document.getElementById("loading").style.display = "none";
  // Create div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // Remove error after 3sec
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear Error
//const clearError = () => document.querySelector('.alert').remove();
