function validateInputs(event) {
  let tagName = event.target.tagName;
  if (tagName == "INPUT" | tagName =="TEXTAREA") {
    var input = event.target;
    var errorElement = input.nextSibling;
    var errorClass = input.classList[0] + "--error";
    if (!input.validity.valid) {
      input.classList.add(errorClass);
      errorElement.classList.remove("hidden");
      if (input.validity.typeMismatch) {
        errorElement.innerHTML = "Sorry, invalid format here";
      } else {
        errorElement.innerHTML = input.validationMessage;
      }
    } else {
      errorElement.innerHTML = "";
      errorElement.classList.add("hidden");
      input.classList.remove(errorClass);
    }
  }
}

function submitForm(event) {
  event.preventDefault();
  if (event.target.checkValidity()) {
    window.alert("Form submitted");
  }
}

export { validateInputs, submitForm };
