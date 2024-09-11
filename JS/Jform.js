document.addEventListener("DOMContentLoaded", function () {
  const visitorRadio = document.getElementById("visitorValidation");
  const exhibitorRadio = document.getElementById("exhibitorValidation");
  const inputField = document.getElementById("inputField"); // Assuming there's an input field with this ID
  const inputLabel = document.getElementById("inputLabel"); // Assuming there's a label with this ID

  function updateInput() {
    if (visitorRadio.checked) {
      inputLabel.textContent = "City";
      inputField.placeholder = "your City";
    } else if (exhibitorRadio.checked) {
      inputLabel.textContent = "Brand Name";
      inputField.placeholder = "your Brand Name";
    }
  }

  visitorRadio.addEventListener("change", updateInput);
  exhibitorRadio.addEventListener("change", updateInput);

  // Initial call to set the correct values on page load
  updateInput();
});
