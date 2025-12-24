import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../common';
import './Header.css';

function Header() {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
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
          <button className="header__search" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <div className="header__avatar">
            <img src="https://ui-avatars.com/api/?name=User&background=3D5AFE&color=fff" alt="Profile" />
          </div>
        </div>
        
        <button className="header__menu-toggle" aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
