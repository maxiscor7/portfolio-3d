import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                
                </div>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/maximiliano-enrique-cornalba-1a2429184/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Enrique Maximiliano Cornalba" className="footer-link">LinkedIn</a>
                    <a href="https://www.instagram.com/cornalbamaxi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Enrique Maximiliano Cornalba" className="footer-link">Instagram</a>
                    <a href="https://github.com/maxiscor7" target="_blank" rel="noopener noreferrer" aria-label="Github de Enrique Maximiliano Cornalba" className="footer-link">GitHub</a>
                    <a href="mailto:enrique.cornalba@hotmail.com" className="footer-link">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;