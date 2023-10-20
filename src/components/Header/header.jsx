import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="header-top">
        <div className="header-name">Maxime Leclerc</div>       
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>À Propos</Link></li>
            <li><Link to="/formation" className={location.pathname === '/formation' ? 'active-link' : ''}>Formation</Link></li>
            <li><Link to="/competences" className={location.pathname === '/competences' ? 'active-link' : ''}>Compétences</Link></li>
            <li><Link to="/interets" className={location.pathname === '/interets' ? 'active-link' : ''}>Intérêts</Link></li>
            <li><Link to="/experience" className={location.pathname === '/experience' ? 'active-link' : ''}>Expériences</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contactez-moi</Link></li>
          </ul>
        </nav>
      </div>
      <div className="social-icons">
        <a href="https://github.com/L1GHTM4X" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} /> {/* Icône GitHub */}
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} /> {/* Icône LinkedIn */}
        </a>
      </div>
    </header>
  );
}




export default Header