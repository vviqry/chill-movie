import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../common';
import './Header.css';

function Header() {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  
  const navLinks = [
    { path: '/series', label: 'Series' },
    { path: '/film', label: 'Film' },
    { path: '/daftar-saya', label: 'Daftar Saya' },
  ];

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <Logo size="medium" />
        </Link>
        
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="header__actions">
          <div className="header__profile" onClick={() => setShowDropdown(!showDropdown)}>
            <div className="header__avatar">
              <img src="/avatar.png" alt="Profile" />
            </div>
            <svg className={`header__chevron ${showDropdown ? 'header__chevron--open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
            
            {showDropdown && (
              <div className="header__dropdown">
                <Link to="/profile" className="header__dropdown-item">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                  Profil Saya
                </Link>
                <Link to="/premium" className="header__dropdown-item">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Ubah Premium
                </Link>
                <button className="header__dropdown-item header__dropdown-item--logout">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                    <polyline points="16,17 21,12 16,7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  Keluar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
