import React from 'react';

import './Button.css';


const Button = props => {
 
  return (
    <button type={props.type} className={`button ${props.isEnableOrDisable&& 'disabled'}`} onClick={props.onClick} >
      {props.children}
    </button>
  );
};

export default Button;
