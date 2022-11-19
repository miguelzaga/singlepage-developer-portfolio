export default function Form() {
  return (
    <form className="form">
      <input className="form__input" required type="text" placeholder="Name" />
      <input
        className="form__input"
        required
        type="email"
        placeholder="Email"
      />
      <textarea className="form__textarea" placeholder="Message" />
      <button className="form__button button" type="submit">
        Send message
      </button>
    </form>
  );
}
