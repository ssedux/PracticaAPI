import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/arcade-welcome.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="arcade-welcome-bg">
      <svg className="arcade-logo" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="32" width="48" height="16" rx="4" fill="#fff" stroke="#00fff7" strokeWidth="2"/>
        <rect x="20" y="12" width="24" height="24" rx="6" fill="#ff00c8" stroke="#fff" strokeWidth="2"/>
        <circle cx="32" cy="24" r="6" fill="#fff" stroke="#00fff7" strokeWidth="2"/>
        <rect x="28" y="44" width="8" height="8" rx="2" fill="#00fff7" stroke="#fff" strokeWidth="2"/>
      </svg>
      <h1 className="arcade-title">PLAYER ONE READY!</h1>
      <p className="arcade-desc">
        ¡Bienvenido/a al gestor de tu colección de juegos!<br />Explora, crea, edita, elimina.
      </p>
      <div className="arcade-loader"></div>
    </div>
  );
};

export default WelcomePage;
