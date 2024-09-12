const input = document.getElementById(`name-input`);
const span = document.getElementById(`name-output`);

input.addEventListener("input", (event) => {
  event.target.value === ""
    ? (span.textContent = "Anonymous")
    : (span.textContent = event.target.value);
});
