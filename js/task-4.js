const form = document.querySelector(`.login-form`);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const login = event.target.elements.email.valueю.trim();
  const password = event.target.elements.password.value.trim();
  if (login === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    console.log({
      login: login,
      password: password,
    });
  }
  form.reset();
});
