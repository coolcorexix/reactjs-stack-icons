import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path fill="#000" d="M5 17V1l8 8-8 8z"></path>
    </svg>
  );
}

export default Icon;
