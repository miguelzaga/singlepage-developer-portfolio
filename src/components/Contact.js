import Form from "./Form";
import patternRings from "/src/assets/images/pattern-rings.svg";

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
      <div className="contact__form">
        <Form />
      </div>
      <img className="contact__rings pattern-rings" src={patternRings} alt="" />
    </section>
  );
}
