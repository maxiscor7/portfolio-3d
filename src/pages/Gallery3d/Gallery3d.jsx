import React from 'react'
import './Gallery3d.css'
import blender from '../../assets/blender.png'
import spline from '../../assets/spline.png'


const Gallery3d = () => {
  return (
    <div className='container-all-cards'>

      <div className="parent pr1">
        <div className="card card1">
          <div className="content-box box1">
            <span className="card-title title1">Iron Man 3D Helmet</span>
            <p className="card-content content1">
            Interact in 3D and discover how it was achieved.
            </p>
            <span className="see-more more1">See More</span>
          </div>

          <div className="date-box dbox1">
            <img src={blender} alt='icon clender'/>
            <span className="month spanM1">Blender</span>
          </div>

        </div>
      </div>

      <div className="parent pr2">
        <div className="card card2">
          <div className="content-box box2">
            <span className="card-title title2">Futuristic eye scene</span>
            <p className="card-content content2">
            Discover the creation process of this scene
            </p>
            <span className="see-more more2">See More</span>
          </div>

          <div className="date-box dbox2">
            <img src={blender} alt='icon clender'/>
            <span className="month spanM2">Blender</span>
          </div>

        </div>
      </div>

      <div className="parent pr3">
        <div className="card card3">
          <div className="content-box box3">
            <span className="card-title title3">Iron Man Reactor</span>
            <p className="card-content content3">
            Interact in 3D and discover how it was achieved.
            </p>
            <span className="see-more more3">See More</span>
          </div>

          <div className="date-box dbox3">
            <img src={spline} alt='icon clender'/>
            <span className="month spanM3">Spline</span>
          </div>

        </div>
      </div>

      <div className="parent pr4">
        <div className="card card4">
          <div className="content-box box4">
            <span className="card-title title4">Interactions with keys</span>
            <p className="card-content content4">
            Interact in 3D and discover how it was achieved.
            </p>
            <span className="see-more more4">See More</span>
          </div>

          <div className="date-box dbox4">
            <img src={spline} alt='icon clender'/>
            <span className="month spanM4">Spline</span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Gallery3d