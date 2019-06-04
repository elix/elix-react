import React from 'react';

export default function(props) {
  const style = {
    background: 'rgb(255, 255, 255)',
    boxShadow: '0 0 1px 1px rgba(0, 0, 0, 0.5)',
    boxSizing: 'border-box',
    cursor: 'pointer',
    height: '12px',
    margin: '7px 5px',
    padding: '0',
    transition: 'border-color 0.3s, color 0.3s, transform 0.3s !important',
    width: '12px'
  };
  return (
    <button style={style}>{props.children}</button>
  );
}
