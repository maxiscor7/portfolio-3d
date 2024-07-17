import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className='Copyright'>
                <label>© 2024 Maximiliano Cornalba</label>
            </div>
            <div className='sections-nav'>
                <NavLink id='enlaces-footer' aria-current="page" to="/" >Home</NavLink>
                <NavLink id='enlaces-footer' aria-current="page" to="/projects" >Projects</NavLink>
                <NavLink id='enlaces-footer' aria-current="page" to="/gallery3d" >3D Gallery</NavLink>
                <NavLink id='enlaces-footer' aria-current="page" to="/contact" >Contact</NavLink>
            </div>
            <div className='social-footer'>
                <a href="https://www.linkedin.com/in/maximiliano-enrique-cornalba-1a2429184/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Enrique Maximiliano Cornalba" className="footer-link">LinkedIn</a>

                <a href="https://www.instagram.com/cornalbamaxi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Enrique Maximiliano Cornalba" className="footer-link">Instagram</a>

                <a href="https://github.com/maxiscor7" target="_blank" rel="noopener noreferrer" aria-label="Github de Enrique Maximiliano Cornalba" className="footer-link">GitHub</a>

                <a href="mailto:enrique.cornalba@hotmail.com" className="footer-link">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;