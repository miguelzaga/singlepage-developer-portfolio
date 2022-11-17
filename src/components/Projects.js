import project1Small from "/src/assets/images/thumbnail-project-1-small.webp";
import project1Large from "/src/assets/images/thumbnail-project-1-large.webp";

export default function Projects() {
  var projects = [
    {
      name: "Design portfolio",
      tech: ["HTML", "CSS"],
      liveSite: "#",
      repo: "#",
      imgSmall: project1Small,
      imgLarge: project1Large,
    },
    {
      name: "E-learning",
      tech: ["HTML", "CSS"],
      liveSite: "#",
      repo: "#",
      imgSmall: "",
      imgLarge: "",
    },
    {
      name: "Todo web app",
      tech: ["HTML", "CSS", "JavaScript"],
      liveSite: "#",
      repo: "#",
      imgSmall: "",
      imgLarge: "",
    },
    {
      name: "Entertainment web app",
      tech: ["HTML", "CSS", "JavaScript"],
      liveSite: "#",
      repo: "#",
      imgSmall: "",
      imgLarge: "",
    },
    {
      name: "Memory Game",
      tech: ["HTML", "CSS", "JavaScript"],
      liveSite: "#",
      repo: "#",
      imgSmall: "",
      imgLarge: "",
    },
    {
      name: "Art gallery",
      tech: ["HTML", "CSS", "JavaScript"],
      liveSite: "#",
      repo: "#",
      imgSmall: "",
      imgLarge: "",
    },
  ];

  return (
    <section className="projects">
      <div className="projects__heading">
        <h2 className="projects__title">Projects</h2>

        <button className="projects__contact button">Contact me</button>
      </div>

      <ul className="projects__list">
        {projects.map(function renderProject(project, i) {
          return (
            <li key={`project-${project.name}-${i}`} className="projects__cell">
              <img
                src={project.imgSmall}
                alt=""
                className="projects__cell-img"
              />
              <div className="projects__cell-main">
                <h3 className="projects__name">{project.name}</h3>
                <ul className="projects__skills">
                  {project.tech.map(function renderSkills(skill, j) {
                    return (
                      <li key={`skill-${j}`} className="projects__skills-li">
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="projects__cell-btns">
                <button className="projects__button button">
                  View project
                </button>
                <button className="projects__button button">View code</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
