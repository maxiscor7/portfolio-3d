import React from 'react';
import SplineScene from '../../components/SplineHome/SplineScene';
import './Home.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import profile from '../../assets/profile.png';

const Home = () => {
  return (
    <section className='section-hero'>
      <div className='hero'>
        <div className='container-title'>
          <h1>CORNALBA MAXIMILIANO</h1>
          <p>Greetings! Explore my story, projects, and skills. Dive into my portfolio and discover more!</p>
          <div className='container-social-links'>
            <img src={github} alt='social media icon github' />
            <img src={linkedin} alt='social media icon linkedin' />
            <img src={instagram} alt='social media icon instagram' />
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
            <p>Beyond my professional endeavors, I am passionate about pushing the boundaries of user experience through innovative 3D design. My goal is to elevate digital interactions by integrating cutting-edge design principles into every project.</p>
          </div>
        </div>
      </div>

      <div className='container-SplineScene'>
        <SplineScene />
      </div>
      
    </section>
  );
}

export default Home;