import emcDevices from '../../assets/emcDevices.png'

import React from 'react'

const Emc = () => {
  return (
    <div>
      <div className='first-levex-text-container'>
        <h1>E=MC²</h1>
        <p>This portfolio was created with the intention of showcasing my experience in a straightforward yet engaging manner. Beyond just a website, I aimed to capture users' attention through interactive 3D elements that provide deeper insights into each of my projects. The goal is to offer a unique and memorable experience for visitors, highlighting both my technical skills and creative approach.</p>
        <h4>WHY E=MC²:</h4>
        <p>The logo E=MC² represents my initials, Enrique Maximiliano Cornalba, and reflects this being my second portfolio iteration. It symbolizes the energy and creativity I bring to my work, much like the famous equation represents energy in the realm of physics.</p>
        <p><b style={{color: "#0879cf"}}>Curious to see my first portfolio?</b> <b>Check it out below!</b></p>
        <div className='container-developed-links-levex'>
          <div className='developed-links-levex'>
            <a href="https://portfolio-cornalba.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Deploy del proyecto">
              <i className="fas fa-external-link-alt" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px' }}></i>
              <label>Visit site</label>
            </a>
          </div>
          
        </div>

      </div>
      <div className='section-devices'>
        <img src={emcDevices} alt='levex devices' />
      </div>
      <div className='first-levex-text-container'>
          <h1>VISUAL STRUCTURE OF THE PORTFOLIO</h1>
          <p>The final design of my portfolio follows a carefully planned structure that facilitates navigation and enhances the user experience.</p>
          <p>This image represents the visual layout of each section of the site as seen by users, ensuring a clear and organized presentation of my projects, skills, and achievements. The structure is responsive, adapting to both desktop and mobile devices, providing a consistent and pleasant experience across all screens.</p>
        </div>
      <div style={{
        position: 'relative',
        paddingTop: '56.25%', /* 16:9 aspect ratio */
        margin: '0 auto', /* Center the iframe */
        maxWidth: '90%', /* Limit the width to 90% of the viewport */
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', /* Optional: Add some shadow for better visibility */
      }}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            background: 'transparent',
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F60QSpwYO8AeucdOCF5TYkB%2FPortfolio-creation%3Fnode-id%3D0-1%26t%3D83cMe2JUPpTw3ldQ-1"
          allowFullScreen
        ></iframe>
      </div>

      <div className='second-levex-text-container'>
        <h2>COLOR PALETTE:</h2>
        <p><strong>Main Colors:</strong> This color palette includes specific colors that represent the brand identity. These colors are used in all portfolio.</p>
      </div>
      <div className='paleta-de-colores'>

        <div className='palete'>
          <div className='color15'></div>
          <label>COLOR # 1</label>
          <label>RGB: 255, 255, 255</label>
          <label>CMYK: 0, 0, 0, 0</label>
          <label>HEX: #ffffff</label>
        </div>

        <div className='palete'>
          <div className='color16'></div>
          <label>COLOR # 2</label>
          <label>RGB: 185, 176, 176</label>
          <label>CMYK: 0, 5, 5, 27</label>
          <label>HEX: #b9b0b0</label>
        </div>

        <div className='palete'>
          <div className='color17'></div>
          <label>COLOR # 3</label>
          <label>RGB: 6, 2, 41</label>
          <label>CMYK: 85, 95, 0, 84</label>
          <label>HEX: #060229</label>
        </div>

        <div className='palete'>
          <div className='color18'></div>
          <label>COLOR # 4</label>
          <label>RGB: 8, 121, 207</label>
          <label>CMYK: 96, 42, 0, 19</label>
          <label>HEX: #0879cf</label>
        </div>

      </div>

      <div className='new-levex-text-container'>
        <h2>FONT FAMILY</h2>
        <h1>Montserrat</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque vero cumque beatae, vel dolore, vitae nihil aliquid excepturi quae minima deleniti ea illo. Aut neque architecto voluptas harum fuga quo alias fugit expedita animi natus tenetur, velit reiciendis, magnam quasi!</p>
        <p>0 1 2 3 4 5 6 7 8 9 +=-</p>

      </div>

      <div className='second-levex-text-container'>
        <h2>IN CONCLUSION</h2>
        <p>I hope you enjoyed exploring my portfolio and found the inspiration you were seeking. As the world continues to evolve at a rapid pace, it’s crucial that we continually adapt and learn new technologies and trends. With this portfolio, I chose to prioritize a unique user experience, experimenting with various technologies rather than focusing solely on performance. Thank you for taking the time to view my work.</p>
      </div>
    </div>
  )
}

export default Emc