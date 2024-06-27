import React from 'react';
import './Projects.css'; // Asegúrate de crear y ajustar este archivo CSS
import { NavLink } from 'react-router-dom';

const projects = [
  { id: 1, route1: '/weather', route2: 'https://clima-app-tnkt.vercel.app/' },
  { id: 2, route1: '/emc', route2: 'https://portfolio-3d-three.vercel.app/' },
  { id: 3, route1: '/levex', route2: 'https://www.levexsa.com/' },
  { id: 4, route1: '/mariano-acosta', route2: 'https://club-mariano-acosta.vercel.app/' },
  { id: 5, route1: '/law', route2: 'https://maximilianos-supercool-site-4a2b96.webflow.io/' },
  { id: 6, route1: '/wolf-gym', route2: 'https://gym-spa-maxi.vercel.app/' }
];

const Projects = () => {
  return (
    <div className='container-projects-grid'>
      <div className='container-tit-text-projects'>
        <h1>PROJECTS</h1>
        <p>Here you will find a collection of works showcasing my skills and creativity in web development. Each project includes a detailed case study where I describe the process, technologies used, and challenges overcome. Additionally, you can explore the live applications and websites through the deployment links.</p>
        <p> I hope you find my work interesting and inspiring!</p>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <div
            key={project.id}
            className={`project-card project-card-${project.id}`}>
            <div className="overlay">
              <NavLink to={project.route1} className="btn-projects-section">Case study</NavLink>
              <a to={project.route2} className="btn-projects-section">URL</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;