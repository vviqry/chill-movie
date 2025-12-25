import './Logo.css';

function Logo({ size = 'medium' }) {
  return (
    <div className={`logo logo--${size}`}>
      <img src="/chill-logo.png" alt="Chill" className="logo__icon" />
      <span className="logo__text">CHILL</span>
    </div>
  );
}

export default Logo;
