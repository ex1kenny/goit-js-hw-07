const getForLogin = document.querySelector(".login-form");
getForLogin.addEventListener("submit", () => {
  const emailInput = getForLogin.elements.email.value;
  const passwordInput = getForLogin.elements.password.value;
  const isValidInput = emailInput != "" && passwordInput != "";
  isValidInput
    ? (console.log({ email: emailInput, password: passwordInput }),
      getForLogin.reset())
    : alert("All form fields must be filled in");
});
