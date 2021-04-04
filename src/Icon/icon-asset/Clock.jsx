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
      <path
        fill="#000"
        d="M9 17A8 8 0 119 1a8 8 0 010 16zm0-2A6 6 0 109 3a6 6 0 000 12zM8 5h1.01L9 9.36l3.22 2.1-.6.93L8 10V5z"
      ></path>
    </svg>
  );
}

export default Icon;
