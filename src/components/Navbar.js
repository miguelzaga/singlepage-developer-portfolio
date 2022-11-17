import socialIcons from "/src/data/socialIcons";

export default function Navbar() {
  return (
    <nav className="navbar">
      {" "}
      <p className="navbar__name">adamkeyes</p>
      <ul className="navbar__socials">
        {socialIcons.map(function renderLi(obj, i) {
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
