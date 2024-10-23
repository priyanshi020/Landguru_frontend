import React from 'react';
import { BACKGROUND, PRIMARY } from '../styles/color';

function Button({ onClick, bgcolor, text, color, borderColor, className, size, block, startIcon }) {
  const buttonStyle = {
    backgroundColor: bgcolor || BACKGROUND,
    color: color || PRIMARY,
    borderColor: borderColor || BACKGROUND ,
    width: block ? '100%' : '',
    display: 'flex',
    alignItems: 'center',
    justifyContent: startIcon ? 'space-between' : 'center',
    padding: '10px 10px',
    borderRadius: '5px',
    fontSize: '14px', 
  };

  return (
    <button
      type="button"
      className={`btn btn-lg ${size ? `btn-${size}` : ''} ${block ? 'w-100' : ''}  ${className}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {startIcon && <img src={startIcon} height={20} alt="Start Icon" style={{ marginRight: '10px' }} />}
      {text}
    </button>
  );
}

export default Button;
