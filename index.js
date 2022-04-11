const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const checkEmail = (input) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (regex.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

const checkRequired = (inputArray) => {
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const checkLength = (input, min, max) => {
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
};

const checkPassword = (password) => {
  let numbers = /[0-9]/g;
  let upperCaseLetters = /[A-Z]/g;
  let lowerCaseLetters = /[a-z]/g;
  if (password.value == "") {
    showError(password, "password is required");
  } else if (!password.value.match(numbers)) {
    showError(password, "must includes numbers");
  } else if (!password.value.match(upperCaseLetters)) {
    showError(password, "must includes upper case letters");
  } else if (!password.value.match(lowerCaseLetters)) {
    showError(password, "must includes lower case letter");
  } else {
    showSuccess(password);
  }
};

const checkPasswordsMatch = (input1, input2) => {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password2]);
  checkPassword(password);
  checkLength(password, 6, 15);
  checkEmail(email);
  checkPasswordsMatch(password,password2)
});
