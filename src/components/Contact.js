export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__top">
        <h2 className="contact__title">Contact</h2>
        <p className="contact__text">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <form className="contact__form form">
        <input required type="text" placeholder="Name" />
        <input required type="email" placeholder="Email" />
        <textarea placeholder="Message" />
        <button type="submit">Send message</button>
      </form>
    </section>
  );
}
