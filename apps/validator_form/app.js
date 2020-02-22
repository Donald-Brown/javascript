const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkValidEmail(email);
  checkPasswordMatch(password, password2);

  // too many if statements
  /*
    if(username.value === ''){
        showError(username, 'Username is required');
    }else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'Email is required');
    }else if(!isValidEmail(email.value)){
        showError(email, 'Email is invalid');
    } else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    }else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, 'Confirm Password is required');
    }else{
        showSuccess(password2);
    }
    */
});

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Show error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show successful
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check for valid email
function checkValidEmail(email) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  !regex.test(email.value.trim())
    ? showError(email, "Email is invalid")
    : showSuccess(email);
}

// Get item name from id
const getFieldName = input =>
  input.id.charAt(0).toUpperCase() + input.id.slice(1);

// Check if passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}
