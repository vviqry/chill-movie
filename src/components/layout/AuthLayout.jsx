import { Logo } from '../common';
import './AuthLayout.css';

function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="auth-layout">
      <div className="auth-layout__form-section">
        <div className="auth-layout__container">
          <div className="auth-layout__logo">
            <Logo size="large" />
          </div>
          
          <div className="auth-layout__content">
            {title && <h1 className="auth-layout__title">{title}</h1>}
            {subtitle && <p className="auth-layout__subtitle">{subtitle}</p>}
            {children}
          </div>
        </div>
      </div>
      
      <div className="auth-layout__promo-section">
        <div className="auth-layout__promo-content">
          <h2 className="auth-layout__promo-title">
            Nikmati Pengalaman Streaming Terbaik
          </h2>
          <p className="auth-layout__promo-text">
            Akses ribuan film dan series favorit kapan saja, di mana saja. Mulai petualangan hiburanmu sekarang!
          </p>
          <div className="auth-layout__features">
            <div className="auth-layout__feature">
              <div className="auth-layout__feature-icon">✓</div>
              <span>Streaming HD & 4K</span>
            </div>
            <div className="auth-layout__feature">
              <div className="auth-layout__feature-icon">✓</div>
              <span>Download Offline</span>
            </div>
            <div className="auth-layout__feature">
              <div className="auth-layout__feature-icon">✓</div>
              <span>Multi-device Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
