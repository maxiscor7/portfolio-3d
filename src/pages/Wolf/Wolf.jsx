import React from 'react'
import wolfDevices from '../../assets/wolf_devices.png'

const Wolf = () => {
  return (
    <div className='container-levex-case-study'>

      <div className='first-levex-text-container'>
        <h1>FOX GYM WOLF WEBSITE</h1>
        <p>This case study explores one of my initial projects utilizing React.js and React Router DOM. The task was to recreate and enhance the website of a local gym near my residence. The goal was not only to replicate the existing site but also to significantly improve its adaptability across different devices and enhance its visual appeal with more attractive and aesthetic images.</p>
        <div className='container-devloped-links'>
          <div className='developed-links'>
            <a href="https://github.com/maxiscor7/gym-spa-maxi" target="_blank" rel="noopener noreferrer" aria-label="Github de Enrique Maximiliano Cornalba">
              <i className="fab fa-github" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px', }}></i>
              <label>See code</label>
            </a>
          </div>
          <div className='developed-links'>
            <a href="https://gym-spa-maxi.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Deploy del proyecto">
              <i className="fas fa-external-link-alt" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px' }}></i>
              <label>Visit site</label>
            </a>
          </div>
        </div>
      </div>

      <div className='section-devices'>
        <img src={wolfDevices} alt='levex devices' />
      </div>

      <div className='goals-levex'>
        <div className='item-inside-goals-levex'>
          <h4>GOALS</h4>
          <ul>
            <li><strong>Modernization:</strong> To modernize the gym's website, ensuring a seamless user experience across various devices.</li>
            <li><strong>Responsiveness:</strong> To improve the site's responsiveness, ensuring it adapts well to desktops, tablets, and smartphones.</li>
            <li><strong>Visual Appeal:</strong> To enhance the visual appeal by integrating high-quality, attractive images.</li>
            <li><strong>Skill Improvement:</strong> To improve my skills in React.js and React Router DOM through practical application.</li>
            <li><strong>Client Showcase:</strong> To develop a showcase piece that could be presented to potential clients, demonstrating my ability to deliver modern, responsive, and visually appealing web designs.</li>
          </ul>
        </div>
        <div className='item-inside-goals-levex'>
          <h4>CHALLENGES</h4>
          <ul>

            <li><strong>Responsive Design:</strong> Ensuring the website was fully responsive across all devices, including desktops, tablets, and smartphones, was a significant challenge. The original website had limited responsiveness, which needed substantial improvements.</li>
            <li><strong>Visual Appeal:</strong> Selecting and integrating high-quality, attractive images that align with the gym's brand and appeal to potential customers required careful consideration and creativity.</li>
            <li><strong>Navigation:</strong> Implementing a user-friendly navigation system using React Router DOM to facilitate easy access to different sections of the website.</li>
            <li><strong>Performance Optimization:</strong> Ensuring the website loads quickly and performs efficiently despite the addition of high-resolution images and other enhancements.</li>
          </ul>
        </div>
        <div className='item-inside-goals-levex'>
          <h4>SOLUTIONS</h4>
          <ul>
            <li><strong>Responsive Layout:</strong> Utilized React.js in combination with CSS media queries and flexible grid layouts to create a responsive design that adjusts seamlessly to different screen sizes.</li>
            <li><strong>Image Optimization:</strong> Selected high-resolution images and optimized them for web use, ensuring quick load times without compromising quality. Integrated lazy loading techniques to enhance performance.</li>
            <li><strong>Enhanced Navigation:</strong> Employed React Router DOM to create a smooth and intuitive navigation system, allowing users to easily browse different sections such as the gym’s services, schedules, membership plans, and contact information.</li>
            <li><strong>Performance Enhancements:</strong> Implemented best practices for performance optimization, including minifying CSS and JavaScript files, utilizing browser caching, and optimizing image loading to ensure a fast and efficient user experience.</li>
          </ul>
        </div>
        <div className='item-inside-goals-levex'>
          <h4>RESULTS</h4>
          <ul>
            <li><strong>Improved User Experience:</strong> The revamped website offered a much better user experience across all devices. Users could easily navigate the site, view high-quality images, and access information quickly.</li>
            <li><strong>Increased Engagement:</strong> The attractive and aesthetic images, along with the improved responsiveness, led to increased user engagement and longer visit durations on the website.</li>
            <li><strong>Positive Feedback:</strong> The gym received positive feedback from its members and potential clients, appreciating the modern look and feel of the new website.</li>
            <li><strong>Higher Conversion Rates:</strong> The improved website design and functionality contributed to higher conversion rates, with more visitors signing up for memberships and inquiring about the gym’s services.</li>
            <li><strong>Skill Enhancement:</strong> This project significantly improved my skills in React.js and React Router DOM, providing hands-on experience with real-world applications.</li>
            <li><strong>Client Showcase:</strong> The completed project served as a showcase piece for potential clients, demonstrating my ability to create modern, responsive, and visually appealing websites</li>
          </ul>
        </div>
      </div>

      <div className='second-levex-text-container'>
        <h2>COLOR PALETTE:</h2>
        <p><strong>Main Colors:</strong> Fox Wolf GYM Website color palette includes specific colors that represent the brand identity.</p>
      </div>
      <div className='paleta-de-colores'>

        

        <div className='palete'>
          <div className='color11'></div>
          <label>COLOR # 1</label>
          <label>RGB: 255, 221, 1</label>
          <label>CMYK: 0, 13, 100, 0</label>
          <label>HEX: #ffdd01</label>
        </div>

        <div className='palete'>
          <div className='color12'></div>
          <label>COLOR # 2</label>
          <label>RGB: 0, 0, 0</label>
          <label>CMYK: 0, 0, 0, 100</label>
          <label>HEX: #000000</label>
        </div>

        <div className='palete'>
          <div className='color13'></div>
          <label>COLOR # 3</label>
          <label>RGB: 15, 14, 14</label>
          <label>CMYK: 0, 7, 7, 94</label>
          <label>HEX: #0f0e0e</label>
        </div>
        <div className='palete'>
          <div className='color14'></div>
          <label>COLOR # 4</label>
          <label>RGB: 74, 74, 74</label>
          <label>CMYK: 0, 0, 0, 71</label>
          <label>HEX: #4a4a4a</label>
        </div>

        <div className='palete'>
          <div className='color10'></div>
          <label>COLOR # 5</label>
          <label>RGB: 255, 255, 255</label>
          <label>CMYK: 0, 0, 0, 0</label>
          <label>HEX: #ffffff</label>
        </div>

      </div>

      <div className='second-levex-text-container'>
        <h2>IN CONCLUSION</h2>
        <p>This project marked a significant milestone in my journey as a web developer, being one of the first to leverage React.js and React Router DOM. The successful recreation and enhancement of the gym’s website not only met the project objectives but also provided valuable insights into responsive design, performance optimization, and user-centric development.</p>
        <p>This experience laid a solid foundation for future projects, emphasizing the importance of continuous improvement and adaptation to new technologies. Additionally, it provided a tangible example of my work to present to clients, showcasing my ability to deliver high-quality web solutions.</p>
      </div>
    </div>
  )
}

export default Wolf