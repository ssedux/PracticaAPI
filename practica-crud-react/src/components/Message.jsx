import React from 'react';
import './styles/message.css';

const Message = ({ type = 'info', children }) => (
  <div className={`message-main${type !== 'info' ? ' ' + type : ''}`}>
    {children}
  </div>
);

export default Message;
