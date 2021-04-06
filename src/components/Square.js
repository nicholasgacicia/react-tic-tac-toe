import React from 'react';


const style = {
  background: 'lightblue',
  border: '1px solid darkred',
  fontSize: '40px',
  fontWeight: '900',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
)

export default Square;
