import React from 'react';
import SplineScene from '../../components/SplineHome/SplineScene';
import './Home.css';
import profile from '../../assets/profile.png';
import levex from '../../assets/levex.png';
import law from '../../assets/law.png';
import marianoAcosta from '../../assets/marianoAcosta.png';
import lvx from '../../assets/lvx.png';
import noCountry from '../../assets/noCountry.png';
import henry from '../../assets/henry.png';
import mockoup from '../../assets/mockup.png';


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
              <a href="https://www.linkedin.com/in/enrique-maximiliano-cornalba-1a2429184/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Enrique Maximiliano Cornalba">
                <i className="fab fa-linkedin"  style={{ fontSize: '30px', color: '#0e76a8', marginRight: '8px', }}></i>
              </a>
              <a href="https://github.com/maxiscor7" target="_blank" rel="noopener noreferrer" aria-label="Github de Enrique Maximiliano Cornalba">
                <i className="fab fa-github" style={{ fontSize: '30px', color: '#171515', marginRight: '8px', }}></i>
              </a>
              <a href="https://www.instagram.com/cornalbamaxi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Enrique Maximiliano Cornalba">
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


      <section className="projects-experience">

        <div className='container-experience'>
          <h2>EXPERIENCE</h2>
          <div className="experience">

            <div className='experience-item item-height1'>
              <div className='contaner-box-experience'>
                <img src={lvx} alt='icon Levex' />
                <div className='container-text-box-experience'>
                  <h4>Levex</h4>
                  <p className='charge-experience'>Front-End Developer</p>
                  <p>Sept. 2023 - present</p>
                  <p>Responsible for the maintenance and continuous development of the company's website. Responsible for the strategic incorporation of content, as well as the efficient execution of periodic updates. I ensure optimal site performance by implementing the latest web practices and technologies, thereby contributing to improved online presence and user experience.</p>
                </div>
              </div>
            </div>

            <div className='experience-item item-height2'>
              <div className='contaner-box-experience'>
                <img src={noCountry} alt='icon no country' />
                <div className='container-text-box-experience'>
                  <h4>No Country</h4>
                  <p className='charge-experience'>Front-End Developer</p>
                  <p>Sept. 2022 - Sept. 2023</p>
                  <p>● Development of E-commerce, using agile methodologies (SCRUM).</p>
                  <p>● Front-end development of the site, designing components, styling.</p>
                  <p>● Contribution to the back-end development of the application.</p>
                </div>
              </div>
            </div>

            <div className='experience-item item-height3'>
              <div className='contaner-box-experience'>
                <img src={henry} alt='icon Henry' />
                <div className='container-text-box-experience'>
                  <h4>Henry - Bootcamp</h4>
                  <p className='charge-experience'>Full-Stack Developer</p>
                  <p>May. 2022 - Sept. 2022</p>
                  <p>● Complete the bootcamp with (+800 hours). TECH SKILLS: ECMAScript 6, React, Redux, Node.js, Express.js, HTML, Algorithms and complexity analysis, Data structures, Sequelize, PostgreSQL, GIT.</p>
                  <p>● Develop the app for the client and server side using React, Redux, HTML, JavaScript, Tailwind, TypeScript, Node.js, Sequelize, PostgreSQL, BCrypt, JWT, among others.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='container-projects-skills'>


          <div className="projects-container">
            <h2>LATEST PROJECTS</h2>
            <div className="projects">

              <div className="project-item">
                <div className='container-box'>
                  <h4>LEVEX SITE MAINTENANCE</h4>
                  <img src={levex} alt='image of the landing Levex' />
                  <p>At Levex, a distributor of AVEVA software in Latin America, I am responsible for website maintenance. My tasks include creating new sections with updated information, adapting the website to design changes, developing internal tools for staff, and adapting the company's app for events.</p>
                  <div className='container-buttons-project'>
                    <div className='button-projects'>
                      <NavLink aria-current="page" to="/projects" className="projectClass">Project</NavLink>
                    </div>
                    <div className='button-projects'>
                      <a href="https://www.levexsa.com/" target="_blank" rel="noopener noreferrer">Site</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-item">
                <div className='container-box'>
                  <h4>REAL STATE LANDING</h4>
                  <img src={law} alt='image of the landing real state'/>
                  <p>Using Webflow, a project was created to develop a real estate website, incorporating 3D technology via Spline to offer a dynamic and attractive visual experience.</p>
                  <div className='container-buttons-project'>
                    <div className='button-projects'>
                      <NavLink aria-current="page" to="/projects" className="projectClass">Project</NavLink>
                    </div>
                    <div className='button-projects'>
                      <a href="https://maximilianos-real-estate-web.webflow.io/" target="_blank" rel="noopener noreferrer">Site</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-item">
                <div className='container-box'>
                  <h4>SITE MARIANO ACOSTA</h4>
                  <img src={marianoAcosta} alt='image of the landing Mariano Acosta'/>
                  <p>For the Mariano Acosta Social and Sports Club, an integral project was implemented that encompassed the adaptation of multiple disciplines, SEO optimization, and the design of an intuitive interface with creative graphics. This improved navigation and communication with the club's members.</p>
                  <div className='container-buttons-project'>
                    <div className='button-projects'>
                      <NavLink aria-current="page" to="/projects" className="projectClass">Project</NavLink>
                    </div>
                    <div className='button-projects'>
                      <a href="https://club-mariano-acosta.vercel.app/" target="_blank" rel="noopener noreferrer">Site</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>

          <div className='container-skills'>
            <h2>SKILLS</h2>
            <div className='container-skills-categories'>
              <div className='container-a-skill'>
                <h4>Frontend Development</h4>
                <ul>
                  <li><strong>Languages & Technologies:</strong> HTML, CSS, JavaScript</li>
                  <li><strong>Frameworks & Libraries:</strong> React, Next.js, Bootstrap, Tailwind, Three.js, React Router DOM, Redux</li>
                  <li><strong>Other Skills:</strong> Responsive Web Design, Saas, SEO</li>
                </ul>
              </div>
              <div className='container-a-skill'>
                <h4>Backend Development</h4>
                <ul>
                  <li><strong>Languages & Technologies:</strong> Node.js</li>
                  <li><strong>Databases:</strong> PostgreSQL, Sequelize</li>
                  <li><strong>Frameworks & Tools:</strong> Express, JWT</li>
                </ul>
              </div>
              <div className='container-a-skill'>
                <h4>Tools & Platforms</h4>
                <ul>
                  <li><strong>Development Tools:</strong> Git, GitHub, VS Code, Postman, Thunder Client</li>
                  <li><strong>Design Tools:</strong> Figma, Canva, Spline, Blender</li>
                  <li><strong>CMS & Builders:</strong> Webflow, WordPress, Helice</li>
                  <li><strong>Testing:</strong> Jest</li>
                  <li><strong>Analytics & Marketing:</strong> Google Analytics, Generating UTMs</li>
                  <li><strong>Security & Performance:</strong> Cloudflare</li>
                </ul>
              </div>
              <div className='container-a-skill'>
                <h4>Other Skills</h4>
                <ul>
                  <li><strong>Soft Skills:</strong> English C2 level</li>
                </ul>
              </div>
            </div>
          </div>


        </div>

      </section>

      <section className='gallery3D-in-home'>
        <div className='container-text-projects3d-in-home'>
          <h2>INTERACT WITH MY DESIGNS</h2>
          <p>In this section, you will find a collection of projects and animations created with Blender and Spline. Here, you can interact with various visual elements and discover the methods and techniques I used to design them. From modeling polygon by polygon to achieve the desired design, to implementing transitions and visual effects to create a smooth and engaging interaction.</p>
          <div className='button-projects'>
            <NavLink aria-current="page" to="/gallery3d" className="projectClass">3D Gallery</NavLink>
          </div>
        </div>
        <img src={mockoup} alt='image of 3D projects' />
      </section>

    </>
  );
}

export default Home;