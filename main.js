const passwords = document.querySelectorAll("[type=password]");
const errorMessages = document.getElementsByName("errormesg");

function match(e) {
  if (passwords[0].value == passwords[1].value) {
    passwords.forEach((password) => password.classList.remove("error"));
    errorMessages.forEach((error) => error.classList.remove("errorMessage"));
  } else {
    passwords.forEach((password) => password.classList.add("error"));
    errorMessages.forEach((error) => error.classList.add("errorMessage"));
  }
}
passwords.forEach((password) => password.addEventListener("input", match));
