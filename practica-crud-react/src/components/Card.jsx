import React from 'react';
import './styles/card.css';

const Card = ({ children, className = '' }) => (
  <div className={`card-main ${className}`.trim()}>
    {children}
  </div>
);

export default Card;
