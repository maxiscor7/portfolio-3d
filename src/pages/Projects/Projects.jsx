import React from 'react';
import './Projects.css'; // Asegúrate de crear y ajustar este archivo CSS


const projects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 }
];

const Projects = () => {
  return (
    <div className='container-projects-grid'>
      <div className="projects-grid">
        {projects.map(project => (
          <div
            key={project.id}
            className={`project-card project-card-${project.id}`}>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;