import React from 'react'
import levexdevices from '../../assets/levex_devices.png'
import heliceLevex from '../../assets/heliceLevex.png'
import './Levex.css'
import SliderLevex from '../../components/SliderLevex/SliderLevex'
import sliderLevex1 from '../../assets/sliderLevex1.png'
import sliderLevex2 from '../../assets/sliderLevex2.png'
import sliderLevex3 from '../../assets/sliderLevex3.png'
import sliderLevex4 from '../../assets/sliderLevex4.png'

const images = [
  { src: sliderLevex1, alt: 'Primera imagen' },
  { src: sliderLevex2, alt: 'Segunda imagen' },
  { src: sliderLevex3, alt: 'Tercera imagen' },
  { src: sliderLevex4, alt: 'Cuarta imagen' }
];


const Levex = () => {
  return (
    <div className='container-levex-case-study'>
      <div className='first-levex-text-container'>
        <h1>LEVEX</h1>
        <p>Levex is a leading distributor of industrial software in Latin America, serving as the official distributor for renowned companies such as AVEVA, DocuSign, Jumio, Nutanix, and RevBits. Operating in the USA, Argentina, Uruguay, Paraguay, Bolivia, and Peru, Levex boasts a multidisciplinary team skilled in plant engineering, automation, control, networking, infrastructure, virtualization, software development, legal matters, ERP, and more. This diverse expertise allows Levex to address clients' needs with a comprehensive approach.</p>
        <div className='container-developed-links-levex'>

          <div className='developed-links-levex'>
            <a href="https://www.levexsa.com/" target="_blank" rel="noopener noreferrer" aria-label="Deploy del proyecto">
              <i className="fas fa-external-link-alt" style={{ fontSize: '30px', color: '#ffffff', marginRight: '8px' }}></i>
              <label>Visit site</label>
            </a>
          </div>
          
        </div>

      </div>
      <div className='section-devices'>
        <img src={levexdevices} alt='levex devices' />
      </div>
      <div className='goals-levex'>
        <div className='item-inside-goals-levex'>
          <h4>GOALS</h4>
          <ul>
            <li><strong>Document and Showcase Industry Success Stories:</strong> Highlight the successful implementation of AVEVA software across various industries.</li>
            <li><strong>Enhance Web Presence:</strong> Improve indexing and search engine positioning to increase online visibility.</li>
            <li><strong>Present Offerings Attractively:</strong> Use a minimalist and visually appealing design to showcase Levex's services and products.</li>
            <li><strong>Adapt to the Helice Platform:</strong> Seamlessly integrate and optimize content within the Helice platform.</li>
            <li><strong>Adhere to Brand Guidelines:</strong> Follow the established brand manual, including colors, typography, and visual styles.</li>
          </ul>
        </div>
        <div className='item-inside-goals-levex'>
          <h4>CHALLENGES</h4>
          <ul>

            <li><strong>Platform Adaptation:</strong> The Helice platform required careful adaptation to its unique structure, necessitating ongoing content additions and modifications.</li>
            <li><strong>Content Organization:</strong> Ensuring that all information, especially success stories, was presented in an organized and accessible manner.</li>
            <li><strong>Brand Consistency:</strong> Maintaining consistency with the brand manual in all visual and textual content.</li>
          </ul>
        </div>
        <div className='item-inside-goals-levex'>
          <h4>SOLUTIONS</h4>
          <ul>
            <li><strong>Content Migration and Structuring:</strong> Transferred and structured all relevant information, particularly industry success stories, within the Helice platform.</li>
            <li><strong>SEO Optimization:</strong> Implemented SEO best practices to improve web indexing and positioning, including keyword research, meta tags, and optimized content.</li>
            <li><strong>Visual Design:</strong> Employed a minimalist design approach using the brand's color palette and typography to create a cohesive and attractive presentation of Levex's offerings.</li>
            <li><strong>Brand Manual Adherence:</strong> Consistently applied the brand manual's guidelines for colors, typography, and visual styles across all platforms and materials.</li>
          </ul>
        </div>
        <div className='item-inside-goals-levex'>
          <h4>RESULTS</h4>
          <ul>
            <li><strong>Increased Online Visibility:</strong> Achieved higher indexing and better search engine positioning, leading to increased website traffic.</li>
            <li><strong>Enhanced User Experience:</strong> The minimalist and visually appealing design improved user engagement and satisfaction.</li>
            <li><strong>Consistent Branding:</strong> Maintained a strong and consistent brand presence across all platforms and materials.</li>
          </ul>
        </div>
      </div>

      <div className='section-divide-banner'>
      </div>

      <div className='second-levex-text-container'>
        <h2>ADAPTING TO A BRAND MANUAL</h2>
        <p>In the process of optimizing the web presence and presentation of Levex, one of the key aspects was the adaptation to the brand manual. This manual provided the necessary guidelines to ensure a consistent and professional visual identity across all our platforms and materials. Below are some of the essential elements of the brand manual that I implemented:</p>
      </div>
      <div className='second-levex-text-container'>
        <h2>COLOR PALETTE:</h2>
        <p><strong>Main Colors:</strong> Levex's color palette includes specific colors that represent the brand identity. These colors are used in all marketing and communication materials.</p>
        <p><strong>Gray Palette:</strong> A range of complementary grays used for text and secondary elements, ensuring readability and a clean design.</p>
      </div>
      <div className='paleta-de-colores'>

        <div className='palete'>
          <div className='color1'></div>
          <label>COLOR # 1</label>
          <label>RGB: 61, 17, 82</label>
          <label>CMYK: 85, 100, 06, 38</label>
          <label>HEX: #3D1152</label>
          <label>PMS: 2627 C</label>
        </div>

        <div className='palete'>
          <div className='color2'></div>
          <label>COLOR # 2</label>
          <label>RGB: 103, 86, 129</label>
          <label>CMYK: 66, 69, 16, 5</label>
          <label>HEX: #675681</label>
          <label>PMS: 668 C</label>
        </div>

        <div className='palete'>
          <div className='color3'></div>
          <label>COLOR # 3</label>
          <label>RGB: 113, 178, 201</label>
          <label>CMYK: 53, 11, 9, 1</label>
          <label>HEX: #71B2C9</label>
          <label>PMS: 7458 C</label>
        </div>

        <div className='palete'>
          <div className='color4'></div>
          <label>COLOR # 4</label>
          <label>RGB: 227, 28, 121</label>
          <label>CMYK: 1, 93, 11, 1</label>
          <label>HEX: #E31C79</label>
          <label>PMS: 2627 C</label>
        </div>

      </div>
      <div className='paleta-de-grises'>
        <div className='palete'>
          <div className='color5'></div>
          <label>BLACK</label>
          <label>RGB: 37, 40, 42</label>
          <label>CMYK: 83, 73, 66, 52</label>
          <label>HEX: #25282A</label>
          <label>PMS: 426 C</label>
        </div>

        <div className='palete'>
          <div className='color6'></div>
          <label>GREY # 1</label>
          <label>RGB: 63, 68, 68</label>
          <label>CMYK: 79, 67, 64, 27</label>
          <label>HEX: #3F4444</label>
          <label>PMS: 446 C</label>
        </div>

        <div className='palete'>
          <div className='color7'></div>
          <label>GREY # 2</label>
          <label>RGB: 113, 124, 125</label>
          <label>CMYK: 85, 100, 06, 38</label>
          <label>HEX: #717C7D</label>
          <label>PMS: 444 C</label>
        </div>

        <div className='palete'>
          <div className='color8'></div>
          <label>GREY # 3</label>
          <label>RGB: 157, 176, 172</label>
          <label>CMYK: 38, 19, 24, 0</label>
          <label>HEX: #9DB0AC</label>
          <label>PMS: 5507 C</label>
        </div>

        <div className='palete'>
          <div className='color9'></div>
          <label>GREY # 4</label>
          <label>RGB: 188, 201, 197</label>
          <label>CMYK: 25, 11, 15, 0</label>
          <label>HEX: #BCC9C5</label>
          <label>PMS: 5527 C</label>
        </div>
      </div>

      <div className='third-levex-text-container'>
        <h2>FONT FAMILY</h2>
        <h1>ROBOTO</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque vero cumque beatae, vel dolore, vitae nihil aliquid excepturi quae minima deleniti ea illo. Aut neque architecto voluptas harum fuga quo alias fugit expedita animi natus tenetur, velit reiciendis, magnam quasi!</p>
        <p>0 1 2 3 4 5 6 7 8 9 +=-</p>

      </div>
      <div className='forth-levex-text-container'>
        <h2>VISUAL STYLE AND APPLICATION EXAMPLES</h2>
      </div>
      <SliderLevex images={images}  />

      <div className='second-levex-text-container'>
        <h2>ADAPTATION TO THE HELICE PLATFORM</h2>
        <p>The adaptation to the Helice platform has been essential for Levex, where we have hosted both our website and our app. This platform has facilitated faster and more efficient content loading than conventional methods.</p>
        <p>We have developed an application that not only provides valuable information but also monitors our technological events. Thanks to the integration of QR code readers and the generation of credentials for our guests, we have optimized the management and access to these events.</p>
        <p>Additionally, the platform has allowed us to conduct surveys that have provided us with crucial data about our customers. This data has revealed areas of improvement and new sales opportunities, helping us adjust our strategies effectively.</p>
        <div className='container-img-helice'>
          <img src={heliceLevex} alt='image of platform levex'/>
        </div>
      </div>

      <div className='second-levex-text-container'>
        <h2>IN CONCLUSION</h2>
        <p>Working on the development of the Levex website and app has been a highly enriching and rewarding experience. Adapting to the Helice platform allowed us to optimize content loading and improve the management of our technological events.</p>
        <p>This experience has not only strengthened my technical and management skills, but has also demonstrated the positive impact that a well-implemented solution can have on the success of a company. I am proud of the achievements we have made and how we have improved Levex's digital presence and efficiency.</p>
      </div>
    </div>
  )
}

export default Levex