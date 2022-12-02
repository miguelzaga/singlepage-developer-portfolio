import { validateInputs, submitForm } from "/src/js/formValidation.js";

export default function Form() {
  return (
    <form
      onSubmit={submitForm}
      onInvalid={validateInputs}
      onBlur={validateInputs}
      className="form"
      noValidate
    >
      <div>
        <input
          className="form__input"
          required
          type="text"
          placeholder="Name"
        />
        <p className="form__error hidden"></p>
      </div>
      <div>
        <input
          className="form__input"
          required
          type="email"
          placeholder="Email"
        />
        <p className="form__error hidden"></p>
      </div>
      <div>
        <textarea className="form__textarea" placeholder="Message" />
        <p className="form__error hidden"></p>
      </div>
      <button className="form__button button" type="submit">
        Send message
      </button>
    </form>
  );
}
