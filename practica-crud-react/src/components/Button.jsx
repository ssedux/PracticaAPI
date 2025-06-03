import React from 'react';
import './styles/button.css';

const Button = ({ children, onClick, type = 'button', className = '', ...props }) => (
  <button
    type={type}
    onClick={onClick}
    className={`button-main ${className}`.trim()}
    {...props}
  >
    {children}
  </button>
);

export default Button;
