import './Logo.css';

function Logo({ size = 'medium' }) {
  return (
    <div className={`logo logo--${size}`}>
      <img src="/chill-logo.png" alt="Chill" className="logo__image" />
    </div>
  );
}

export default Logo;
