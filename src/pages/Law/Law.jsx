import React from 'react'
import realStateDevices from '../../assets/realStateDevices.png'

const Law = () => {
  return (
    <div className='container-levex-case-study'>

      <div className='first-levex-text-container'>
        <h1>REAL STATE WEBSITE</h1>
        <p>This case study highlights my project using Webflow to create a landing page inspired by a real estate services site. The project aimed to understand Webflow's capabilities and included unique features such as a 3D nocturnal Earth in the contact section and rotating property cards. This project served as a comprehensive learning experience to explore the potential of Webflow in designing dynamic and visually appealing websites.</p>
        <div className='container-developed-links-levex'>

          <div className='developed-links-levex'>
            <a href="https://maximilianos-real-estate-web.webflow.io/" target="_blank" rel="noopener noreferrer" aria-label="Deploy del proyecto">
              <i className="fas fa-external-link-alt" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px' }}></i>
              <label>Visit site</label>
            </a>
          </div>
          
        </div>
      </div>

      <div className='section-devices'>
        <img src={realStateDevices} alt='levex devices' />
      </div>

      <div className='goals-levex'>
        <div className='item-inside-goals-levex'>
          <h4>GOALS</h4>
          <ul>
            <li><strong>Learning Webflow:</strong> To gain a deep understanding of Webflow's features and capabilities through practical application.</li>
            <li><strong>Real Estate Theme:</strong> To design a landing page inspired by real estate services, showcasing various properties.</li>
            <li><strong>3D Integration:</strong> To incorporate a 3D element, specifically a nocturnal Earth, to emphasize the global reach of the services.</li>
            <li><strong>Dynamic Content:</strong> To implement rotating cards that display different properties, enhancing the visual appeal and interactivity of the page.</li>
          </ul>
        </div>
        <div className='item-inside-goals-levex'>
          <h4>CHALLENGES</h4>
          <ul>
            <li><strong>Webflow Mastery:</strong> Learning the ins and outs of Webflow, including its design tools, CMS features, and interactions.</li>
            <li><strong>3D Element Integration:</strong> Incorporating a 3D nocturnal Earth into the contact section to highlight the global availability of services.</li>
            <li><strong>Dynamic Property Display:</strong> Creating rotating cards to dynamically showcase different properties, ensuring smooth transitions and responsiveness.</li>
          </ul>
        </div>
        <div className='item-inside-goals-levex'>
          <h4>SOLUTIONS</h4>
          <ul>
            <li><strong>Webflow Learning:</strong> Engaged in extensive tutorials and hands-on practice within Webflow to understand its interface, functionalities, and limitations.</li>
            <li><strong>3D Earth Design:</strong> Integrated a 3D nocturnal Earth in the contact section using a widget provided by Spline, designed in Spline itself, to achieve the desired effect.</li>
            <li><strong>Rotating Cards: </strong> Utilized Webflow's interactions and animations to create rotating cards that display various properties, ensuring a seamless and responsive user experience across all devices.</li>
          </ul>
        </div>
        <div className='item-inside-goals-levex'>
          <h4>RESULTS</h4>
          <ul>
            <li><strong>Enhanced Skills:</strong> Gained substantial proficiency in using Webflow, understanding its potential for creating dynamic and visually appealing web designs.</li>
            <li><strong>Professional Landing Page:</strong> Developed a professional, real estate-inspired landing page with unique features such as a 3D Earth and dynamic property cards.</li>
            <li><strong>Positive Feedback:</strong> Received positive feedback on the design and functionality of the landing page, validating the effectiveness of the learning process.</li>
            <li><strong>Showcase for Clients:</strong> Created a showcase piece that demonstrates the ability to utilize Webflow for developing modern and interactive websites, useful for attracting potential clients.</li>
          </ul>
        </div>
      </div>
      

      <div className='second-levex-text-container'>
        <h2>IN CONCLUSION</h2>
        <p>This project was a significant step in mastering Webflow, allowing me to explore its diverse features and create a professional landing page inspired by real estate services. The inclusion of a 3D nocturnal Earth and dynamic property cards not only enhanced the visual appeal but also demonstrated the potential of Webflow in developing interactive web elements.</p>
        <p>This experience provided a solid foundation for future projects and serves as an impressive showcase for potential clients, highlighting my ability to leverage Webflow for innovative web design solutions.</p>
      </div>
    </div>
  )
}

export default Law