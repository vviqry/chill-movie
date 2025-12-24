import './Logo.css';

function Logo({ size = 'medium', showText = true }) {
  return (
    <div className={`logo logo--${size}`}>
      <div className="logo__icon">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="url(#logo-gradient)"/>
          <path d="M12 14L20 10L28 14V26L20 30L12 26V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 10V30" stroke="white" strokeWidth="2"/>
          <path d="M12 14L28 26" stroke="white" strokeWidth="2"/>
          <path d="M28 14L12 26" stroke="white" strokeWidth="2"/>
          <defs>
            <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3D5AFE"/>
              <stop offset="1" stopColor="#7C4DFF"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      {showText && <span className="logo__text">Chill</span>}
    </div>
  );
}

export default Logo;
