import profileMobile from "/src/assets/images/image-profile-mobile.webp";
import profileTablet from "/src/assets/images/image-profile-tablet.webp";
import profileDesktop from "/src/assets/images/image-profile-desktop.webp";
import patternRings from "/src/assets/images/pattern-rings.svg";
import patternCircle from "/src/assets/images/pattern-circle.svg";

export default function Intro() {
  var skills = [
    {
      name: "HTML",
      years: 4,
    },
    {
      name: "CSS",
      years: 4,
    },
    {
      name: "Javascript",
      years: 4,
    },
    {
      name: "Accessibility",
      years: 4,
    },
    {
      name: "React",
      years: 3,
    },
    {
      name: "Sass",
      years: 3,
    },
  ];

  return (
    <section className="intro">
      <div className="intro__main">
        <picture>
          <source srcSet={profileDesktop} media="(min-width: 1000px)" />
          <source srcSet={profileTablet} media="(min-width: 600px)" />
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
        <img
          className="intro__main-rings pattern-rings"
          src={patternRings}
          alt=""
        />
        <img
          className="intro__main-circle pattern-circle"
          src={patternCircle}
          alt=""
        />
      </div>

      <ul className="intro__skills">
        {skills.map(function renderSkill(skill, i) {
          return (
            <li key={`intro-li-${skill.name}-i`} className="intro__skills-li">
              <p className="intro__skills-name">{skill.name}</p>
              <span className="intro__skills-years">
                {skill.years} Years Experience
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
