import React from 'react';
import SplineScene from '../../components/SplineHome/SplineScene';
import './Home.css';
import profile from '../../assets/profile.png';
import levex from '../../assets/levex.png';
import realState from '../../assets/realState.png';
import marianoAcosta from '../../assets/marianoAcosta.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>

      <section className='section-hero'>
        <div className='hero'>
          <div className='container-title'>
            <h1>CORNALBA MAXIMILIANO</h1>
            <p>Greetings! Explore my story, projects, and skills. Dive into my portfolio and discover more!</p>
            <div className='container-social-links'>
              <a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" style={{ fontSize: '30px', color: '#0e76a8', marginRight: '8px', }}></i>
              </a>
              <a href="https://github.com/maxiscor7" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" style={{ fontSize: '30px', color: '#171515', marginRight: '8px', }}></i>
              </a>
              <a href="https://www.instagram.com/cornalbamaxi/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram" style={{ fontSize: '30px', color: '#C13584', marginRight: '8px', }}></i>
              </a>
            </div>
          </div>

          <img src={profile} alt='profile-picture' className='profile-picture' />

          <div className='container-last-part-hero'>
            <div className='cards-hero-container'>
              <h2>FRONT-END DEVELOPER</h2>
              <p>Based in Argentina, with over 4 years of experience crafting web solutions. Skilled in HTML, CSS, JavaScript, React, Vite, Next.js, and proficient with platforms like Webflow and WordPress, delivering seamless and optimized digital experiences.</p>
            </div>
            <div className='cards-hero-container'>
              <h2>ABOUT ME</h2>
              <p>I have a great passion for 3D design and my goal is to create unique and satisfying experiences for users, raising the level of digital interaction in each project.</p>
            </div>
          </div>
        </div>

        <div className='container-SplineScene'>
          <SplineScene />
        </div>

      </section>
      <section class="projects-experience">
        <div class="projects-container">
          <h2>LATEST PROJECTS</h2>
          <div class="projects">

            <div class="project-item">
              <div className='container-box'>
                <h4>LEVEX SITE MAINTENANCE</h4>
                <img src={levex} />
                <p>At Levex, a distributor of AVEVA software in Latin America, I am responsible for website maintenance. My tasks include creating new sections with updated information, adapting the website to design changes, developing internal tools for staff, and adapting the company's app for events.</p>
                <div className='container-buttons-project'>
                  <div className='button-projects'>
                    <NavLink aria-current="page" to="/projects"  className="projectClass">Project</NavLink>
                  </div>
                  <div className='button-projects'>
                    <a href="https://www.levexsa.com/" target="_blank" rel="noopener noreferrer">Site</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-item">
              <div className='container-box'>
                <h4>REAL STATE LANDING</h4>
                <img src={realState} />
                <p>Using Webflow, a project was created to develop a real estate website, incorporating 3D technology via Spline to offer a dynamic and attractive visual experience.</p>
                <div className='container-buttons-project'>
                  <div className='button-projects'>
                    <NavLink aria-current="page" to="/projects"  className="projectClass">Project</NavLink>
                  </div>
                  <div className='button-projects'>
                    <a href="https://maximilianos-real-estate-web.webflow.io/" target="_blank" rel="noopener noreferrer">Site</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="project-item">
              <div className='container-box'>
                <h4>SITE MARIANO ACOSTA</h4>
                <img src={marianoAcosta} />
                <p>For the Mariano Acosta Social and Sports Club, an integral project was implemented that encompassed the adaptation of multiple disciplines, SEO optimization, and the design of an intuitive interface with creative graphics. This improved navigation and communication with the club's members.</p>
                <div className='container-buttons-project'>
                  <div className='button-projects'>
                    <NavLink aria-current="page" to="/projects"  className="projectClass">Project</NavLink>
                  </div>
                  <div className='button-projects'>
                    <a href="https://club-mariano-acosta.vercel.app/" target="_blank" rel="noopener noreferrer">Site</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='container-experience'>
          <h2>EXPERIENCE</h2>
          <div class="experience">
            <p>• Experiencia 1</p>
            <p>• Experiencia 2</p>
            <p>• Experiencia 3</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;