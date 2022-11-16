import profileMobile from "/src/assets/images/image-profile-mobile.webp";
import profileTablet from "/src/assets/images/image-profile-tablet.webp";
import profileDesktop from "/src/assets/images/image-profile-desktop.webp";

export default function Intro() {
  return (
    <section className="intro">
      <picture>
        <source srcset={profileDesktop}media="(min-width: 1000px)" />
        <source srcset={profileTablet}media="(min-width: 600px)" />
        <img className="intro__img" src={profileMobile} alt="Profile picture" />
      </picture>
      <img src="" alt="" />
      <h1>
        Nice to meet you! I'm <b>Adam Keyes</b>.
      </h1>
      <p>
        Based in the UK, I'm a front-end developer passionate about building
        accessible web apps that users love.
      </p>

      <button>Contact me</button>

      <div>
        <ul>
          <li>HTML 4 Years Experience</li>

          <li>CSS 4 Years Experience</li>

          <li>JavaScript 4 Years Experience</li>

          <li>Accessibility 4 Years Experience</li>

          <li>React 3 Years Experience</li>

          <li>Sass 3 Years Experience</li>
        </ul>
      </div>
    </section>
  );
}
