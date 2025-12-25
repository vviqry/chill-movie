import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo, Button, Input } from '../components/common';
import './Auth.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      alert('Username dan kata sandi harus diisi!');
      return;
    }
    
    alert(`Selamat datang, ${formData.username}! Anda akan diarahkan ke beranda.`);
    navigate('/');
  };

  const handleGoogleLogin = () => {
    alert('Fitur login dengan Google sedang dalam pengembangan!');
  };

  return (
    <div className="auth-page" style={{ backgroundImage: 'url(/backgroundb.jpg)' }}>
      <div className="auth-overlay"></div>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-logo">
            <Logo size="large" />
          </div>
          
          <h1 className="auth-title">Masuk</h1>
          <p className="auth-subtitle">Selamat datang kembali!</p>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <Input
              label="Username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              placeholder="Masukkan username"
              required
            />
            
            <Input
              label="Kata Sandi"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukkan kata sandi"
              required
            />

            <div className="auth-options">
              <Link to="/register" className="auth-link">
                Belum punya akun? <strong>Daftar</strong>
              </Link>
              <Link to="/forgot-password" className="auth-link">
                Lupa kata sandi?
              </Link>
            </div>

            <Button type="submit" variant="login" size="large" fullWidth>
              Masuk
            </Button>

            <div className="auth-divider">
              <span>atau</span>
            </div>

            <Button 
              type="button" 
              variant="google" 
              size="large" 
              fullWidth
              onClick={handleGoogleLogin}
              icon={
                <svg viewBox="0 0 48 48" width="18" height="18">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  <path fill="none" d="M0 0h48v48H0z"/>
                </svg>
              }
            >
              Masuk dengan Google
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
