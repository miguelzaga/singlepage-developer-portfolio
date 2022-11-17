import projects from "/src/data/projects";

export default function Projects() {
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
