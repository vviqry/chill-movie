import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../common';
import './Footer.css';

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const genres = ['Aksi', 'Drama', 'Komedi', 'Sains & Alam', 'Anak-anak', 'Fantasi Ilmiah & Fantasi', 'Petualangan', 'Thriller', 'Anime', 'Kejahatan', 'Perang', 'Britania', 'KDrama', 'Romantis'];
  
  const helpLinks = ['FAQ', 'Kontak Kami', 'Privasi', 'Syarat & Ketentuan'];

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        {/* Brand / Logo */}
        <div className="footer__brand">
          <Logo size="medium" />
          <p className="footer__tagline">
            ©2023 Chill All Rights Reserved.
          </p>
        </div>
        
        {/* Links */}
        <div className="footer__links">
          {/* Genre Column */}
          <div className={`footer__column ${openSection === 'genre' ? 'footer__column--open' : ''}`}>
            <button 
              className="footer__title"
              onClick={() => toggleSection('genre')}
            >
              Genre
              <svg className="footer__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div className="footer__list footer__list--genre">
              {genres.map((genre) => (
                <Link key={genre} to="#" className="footer__link">{genre}</Link>
              ))}
            </div>
          </div>
          
          {/* Bantuan Column */}
          <div className={`footer__column ${openSection === 'bantuan' ? 'footer__column--open' : ''}`}>
            <button 
              className="footer__title"
              onClick={() => toggleSection('bantuan')}
            >
              Bantuan
              <svg className="footer__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <ul className="footer__list">
              {helpLinks.map((link) => (
                <li key={link}>
                  <Link to="#" className="footer__link">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
