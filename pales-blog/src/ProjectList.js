import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <section className="project-list container">
      <div>
        <h1>My Projects</h1>
        <div className="inside">
        {projects.map(project => (
          <article className="article" key={project.id}>
            <figure className="fig">
              <Link to={project.link} target="_blank">
                <img src={project.imgThumb} alt=""/>
                <p className="title">{project.title}</p>
              </Link>
            </figure>
            <p className="desc">{project.desc}</p>
            <aside className="tags">
            {project.tags.map(tag => (
              <p key={tag.id}>{tag.name}</p>
            ))}
            </aside>
          </article> 
        ))}
        </div>
      </div>
    </section>
  );
}
 
export default ProjectList;