import React from 'react'
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
          <p>Discover more about me, my projects, and my skills. Thank you for taking the time to visit my site.</p>
          <div className='container-social-links'>
            <img src={github} alt='social media icon github'/>
            <img src={linkedin} alt='social media icon linkedin'/>
            <img src={instagram} alt='social media icon instagram'/>
          </div>
        </div>

        <img src={profile} alt='profile-picture' className='profile-picture'/>

        <div className='container-last-part-hero'>
          <div className='cards-hero-container'>
            <h2>FRONT-END DEVELOPER</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptate mollitia culpa veritatis! Natus, sunt?</p>
          </div>
          <div className='cards-hero-container'>
            <h2>ABOUT ME</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptate mollitia culpa veritatis! Natus, sunt?</p>
          </div>
        </div>

      </div>

      <SplineScene/>
    </section>
  )
}

export default Home