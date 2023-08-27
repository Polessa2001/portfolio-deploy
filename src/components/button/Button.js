import React from 'react';
import './Button.scss';
const Button = (props) => {
  return (
    <button className="button" style={{ backgroundColor: props.backgroundColor }} onClick={props.function} type={props.type}>{props.name}</button>
  )
};
export default Button;
