import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../common';
import './Header.css';

function Header() {
  const location = useLocation();
  
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
          <button className="header__search" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <div className="header__avatar">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
