import profileMobile from "/src/assets/images/image-profile-mobile.webp";
import profileTablet from "/src/assets/images/image-profile-tablet.webp";
import profileDesktop from "/src/assets/images/image-profile-desktop.webp";
import patternRings from "/src/assets/images/pattern-rings.svg";
import patternCircle from "/src/assets/images/pattern-circle.svg";

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro__top">
        <picture>
          <source srcset={profileDesktop} media="(min-width: 1000px)" />
          <source srcset={profileTablet} media="(min-width: 600px)" />
          <img
            className="intro__img"
            src={profileMobile}
            alt="Profile picture"
          />
        </picture>
        <h1 className="intro__title">
          Nice to meet you! I'm <b className="intro__title-name">Adam Keyes</b>.
        </h1>
        <p className="intro__text">
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>

        <button className="intro__button button">Contact me</button>
      </div>

      <div className="intro__bottom">
        <ul>
          <li>HTML 4 Years Experience</li>

          <li>CSS 4 Years Experience</li>

          <li>JavaScript 4 Years Experience</li>

          <li>Accessibility 4 Years Experience</li>

          <li>React 3 Years Experience</li>

          <li>Sass 3 Years Experience</li>
        </ul>
      </div>
      <img className="intro__pattern-rings" src={patternRings} alt="" />
      <img className="intro__pattern-circle" src={patternCircle} alt="" />
    </section>
  );
}
