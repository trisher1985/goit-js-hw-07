const form = document.querySelector(".login-form");
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const userValue = {
      email: email,
      password: password,
    };
    console.log(userValue);
    form.reset();
  }
});
