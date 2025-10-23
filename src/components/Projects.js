import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A React application with modern features",
      technologies: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/yourusername/project1",
      demo: "https://yourusername.github.io/project1",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Full-stack web application",
      technologies: ["Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/project2",
      demo: "https://yourproject2.herokuapp.com",
      image: "/images/project2.jpg"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;