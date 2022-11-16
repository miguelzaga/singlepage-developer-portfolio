import iconFrontendMentor from "/src/assets/images/icon-frontend-mentor.svg";
import iconGithub from "/src/assets/images/icon-github.svg";
import iconLinkedin from "/src/assets/images/icon-linkedin.svg";
import iconTwitter from "/src/assets/images/icon-twitter.svg";

var icons = [
  { src: iconGithub, name: "Github" },
  { src: iconFrontendMentor, name: "Frontend Mentor" },
  { src: iconLinkedin, name: "Linkedin" },
  { src: iconTwitter, name: "Twitter" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      <p className="navbar__name">adamkeyes</p>
      <ul className="navbar__socials">
        {icons.map(function renderLi(obj, i) {
          return (
            <li key={`li-${obj.src}`} className="navbar__socials-li">
              <a className="navbar__socials-a" href="#">
                <img
                  className="navbar__socials-img"
                  src={obj.src}
                  alt={`${obj.name} icon`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
