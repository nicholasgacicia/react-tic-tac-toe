import React from "react";

// const props = {
//   onClick = () => "function",
//   value: "x",
// };

// const { value } = props;


const Square = ({ value, onClick }) => (
  <button onClick={onCLick}>
    {value}
  </button>
);

export default Square;
