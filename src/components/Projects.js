import projects from "/src/data/projects";
/*
   {
    name: "Design portfolio",
    tech: ["HTML", "CSS"],
    liveSite: "#",
    repo: "#",
    imgSmall: project1Small,
    imgLarge: project1Large,
    }
*/

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects__heading">
        <h2 className="projects__title">Projects</h2>

        <a href="#contact" className="projects__contact button">
          Contact me
        </a>
      </div>

      <ul className="projects__list">
        {projects.map(function renderProject(project, i) {
          return (
            <li key={`project-${project.name}-${i}`} className="projects__cell">
              <a className="projects__cell-img" href={project.liveSite}>
                <picture>
                  <source
                    srcSet={project.imgLarge}
                    media="(min-width: 1024px)"
                  />
                  <img src={project.imgSmall} alt={project.name} />
                </picture>
              </a>
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
                <a href={project.liveSite} className="projects__button button">
                  View project
                </a>
                <a href={project.repo} className="projects__button button">
                  View code
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
