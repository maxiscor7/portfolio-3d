import React from 'react'
import './Weather.css'
import weatherDivices from '../../assets/weather-devices.png'
import logoweather from '../../assets/logoweather.png'

const Weather = () => {
  return (
    <div className='container-weather-case-study'>
      <div className='first-weather-text-container'>
        <h1>WEATHER APP</h1>
        <p>The weather app I developed aims to provide accurate, real-time weather information to users, based on their current location or any city they wish to check. It uses modern technologies and reliable APIs to offer an intuitive and visually appealing experience.</p>
        <div className='container-devloped-links'>
          <div className='developed-links'>
            <a href="https://github.com/maxiscor7/clima-App" target="_blank" rel="noopener noreferrer" aria-label="Github de Enrique Maximiliano Cornalba">
              <i className="fab fa-github" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px', }}></i>
              <label>See code</label>
            </a>
            </div>
            <div className='developed-links'>
            <a href="https://clima-app-tnkt.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Deploy del proyecto">
              <i className="fas fa-external-link-alt" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px' }}></i>
              <label>Visit site</label>
            </a>
          </div>
        </div>

      </div>
      <div className='section-devices'>
        <img src={weatherDivices} alt='weather devices' />
      </div>
      <div className='goals'>
        <div className='item-inside-goals'>
          <h4>GOALS</h4>
          <ul>
            <li>The main objective of this application is to provide users with detailed and up-to-date weather information, making it easier to plan their daily activities.</li>
            <li>We sought to create a friendly and responsive interface that allows access to climate data quickly and efficiently.</li>
          </ul>
        </div>
        <div className='item-inside-goals'>
          <h4>CHALLENGES</h4>
          <ul>

            <li>Integration with the OpenWeatherMap API and response handling.</li>
            <li>Implementation of geolocation to obtain the user's location.</li>
            <li>Design and development of animations that reflect weather conditions.</li>
            <li>Optimizing app performance to ensure a smooth experience.</li>
            <li>Management of location permissions in different browsers and devices.</li>
          </ul>
        </div>
        <div className='item-inside-goals'>
          <h4>SOLUTIONS</h4>
          <ul>
            <li>Used Redux to handle application state efficiently, making it easy to integrate with the OpenWeatherMap API.</li>
            <li>Implemented the browser's geolocation API to obtain the user's location, requesting permissions appropriately.</li>
            <li>Optimized the performance of the app by lazy loading components and efficient use of API queries.</li>
          </ul>
        </div>
        <div className='item-inside-goals'>
          <h4>RESULTS</h4>
          <ul>
            <li>The application provides accurate and real-time weather information.</li>
            <li>The interface is intuitive and easy to use, improving the user experience.</li>
            <li>Animations and visuals make weather information more understandable and attractive.</li>
            <li>The search function allows users to obtain weather information for any city in the world.</li>
            <li>The app has received positive comments for its design and functionality.</li>
          </ul>
        </div>
      </div>

      <div className='section-api'>
        <div className='item-inside-section-api'>
          <h4>USING THE OPENWEATHERMAP API</h4>
          <p>To get accurate and real-time weather data, I used the OpenWeatherMap API. This API provides a wealth of information on current weather conditions, short-term and long-term forecasts, and historical data.</p>
          <br />
          <h4>BENEFITS OF THE OPENWEATHERMAP API</h4>
          <ul>
            <li><strong>Reliability and Accuracy:</strong> The data provided by the API is accurate and reliable, which is crucial for a weather application.</li>
            <li><strong>Flexibility:</strong> The API offers multiple endpoints for different needs, from current data to forecasts and weather alerts.</li>
            <li><strong>Complete Documentation:</strong> OpenWeatherMap's documentation is clear and detailed, making it easy to integrate and use the API.</li>
            <li><strong>Personalization:</strong> Allows customization of measurement units (metric, imperial) and the language of the information, improving the user experience.</li>
          </ul>
        </div>
        <img src={logoweather} alt='logo apiopenweatheapp' />

      </div>
    </div>
  )
}

export default Weather