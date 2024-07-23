import React from 'react'
import marianoDevices from '../../assets/marianoDevices.png'
import './MarianoAcosta.css'
import CardProfile from '../../components/CardProfile/CardProfile'
import profile1 from '../../assets/profileComment1.jpg'
import profile2 from '../../assets/profileComment2.png'


const MarianoAcosta = () => {
  return (
    <div className='container-mariano-case-study'>
      <div className='first-mariano-text-container'>
        <h1>CLUB MARIANO ACOSTA</h1>
        <p>Club Social and Deportivo Mariano Acosta, located in the Merlo district, has a rich history dating back to 1946. This club offers multiple disciplines for both children and adults, and it has a sports complex and a central headquarters. The goal of my engagement was to develop a comprehensive solution to improve communication with members, provide detailed information about activities and events, and create an attractive platform to encourage new memberships.</p>
        <div className='container-devloped-links'>
          <div className='developed-links'>
            <a href="https://github.com/maxiscor7/club-mariano-acosta" target="_blank" rel="noopener noreferrer" aria-label="Github de Enrique Maximiliano Cornalba">
              <i className="fab fa-github" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px', }}></i>
              <label>See code</label>
            </a>
          </div>
          <div className='developed-links'>
            <a href="https://club-mariano-acosta.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Deploy del proyecto">
              <i className="fas fa-external-link-alt" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px' }}></i>
              <label>Visit site</label>
            </a>
          </div>
        </div>

      </div>
      <div className='section-devices'>
        <img src={marianoDevices} alt='levex devices' />
      </div>
      <div className='goals-mariano'>
        <div className='item-inside-goals-mariano'>
          <h4>GOALS</h4>
          <ul>
            <li><strong>Improve communication with members:</strong> Create a space where members can check schedules, communicate with the club, and receive updated information.</li>
            <li><strong>Centralize information:</strong> Provide details on how to become a member, available disciplines, events, sports teams, and the club's history.</li>
            <li><strong>Visual appeal:</strong> Develop an aesthetic design that attracts potential new members.</li>
            <li><strong>Resource optimization:</strong> Implement economical and efficient solutions that minimize maintenance and domain costs.</li>
          </ul>
        </div>
        <div className='item-inside-goals-mariano'>
          <h4>CHALLENGES</h4>
          <ul>
            <li><strong>Limited resources:</strong> Working with a tight budget, without the possibility of using high-cost paid services.</li>
            <li><strong>Quality of existing content:</strong> Improving and updating the quality of the club's images and visual content.</li>
            <li><strong>Integration of services:</strong> Finding effective free services to integrate for managing forms and other web functionalities.</li>
            <li><strong>Deployment and maintenance:</strong> Ensuring that the solution is sustainable and economical in the long term.</li>
          </ul>
        </div>
        <div className='item-inside-goals-mariano'>
          <h4>SOLUTIONS</h4>
          <ul>
            <li><strong>Economical development:</strong> Utilizing free tools and platforms for website development, such as Vercel for deployment, ensuring zero maintenance and domain costs.</li>
            <li><strong>Design and visual improvement:</strong> Designing all necessary images, from sponsor sliders to products for the club's merchandising section.</li>
            <li><strong>Integration of free services:</strong> Incorporating free third-party services for managing forms and communication with members.</li>
            <li><strong>SEO optimization:</strong> Implementing SEO best practices to improve the website's search engine ranking, making it easier for potential members to find the club online..</li>
            <li><strong>Content optimization:</strong> Enhancing the quality of existing images and visual content, ensuring that all material is attractive and professional.</li>
          </ul>
        </div>
        <div className='item-inside-goals-mariano'>
          <h4>RESULTS</h4>
          <ul>
            <li><strong>Centralized and functional platform:</strong> Members now have access to a centralized platform where they can check schedules, get information on how to become a member, and stay updated on the club's disciplines and events.</li>
            <li><strong>Improved communication:</strong> Communication with members has been optimized, facilitating interaction and information flow.</li>
            <li><strong>Increased visual appeal:</strong> The aesthetic design of the website has improved the club's perception, attracting potential new members.</li>
            <li><strong>Sustainable solution:</strong> The implementation of free tools and services has ensured that the website is sustainable and economical in the long term.</li>
          </ul>
        </div>
      </div>
      <div className='conatiner-tittle-comments'>
        <div className='second-mariano-text-container'>
          <h2>VISUAL STYLE AND APPLICATION EXAMPLES</h2>
        </div>
        <div className='container-section-comments-profiles'>

          <CardProfile
            image={profile1}
            name="Rodrigo G. Villalba"
            position="Vice president"
            comment="“Hiring Maximiliano has been the best decision the club could have made. Since his arrival, we have noticed a significant improvement in communication with partners. The new web platform allows us to be aware of the club's schedules, events and news quickly and efficiently. In addition, the quality of the design has attracted new partners interested in our activities.”"

          />
          <CardProfile
            image={profile2}
            name="Martín A. Calderón"
            position="Account Review Commission"
            comment="“Maximiliano has completely transformed our internal and external communication. Their ability to develop a cost-effective and effective solution has been invaluable to us. The integration of free services and the improvement in the quality of images and visual content have raised the perception of the club. We are extremely satisfied with their work and the results obtained.”"

          />
        </div>
      </div>
      <div className='second-levex-text-container'>
        <h2>IN CONCLUSION</h2>
        <p>The development of the website for Club Social y Deportivo Mariano Acosta has not only improved communication and centralized information but also optimized resources, enhanced visual quality, and provided a sustainable solution. This project reflects my commitment to offering comprehensive and economical solutions that benefit organizations with limited resources while ensuring high quality and visual appeal.</p>
      </div>
    </div>
  )
}

export default MarianoAcosta