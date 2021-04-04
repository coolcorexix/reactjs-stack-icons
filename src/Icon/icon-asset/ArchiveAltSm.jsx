import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#000"
        d="M0 3a2 2 0 012-2h10a2 2 0 012 2H0zM1 4v7a2 2 0 002 2h8a2 2 0 002-2V4h-2v7H3V4H1z"
      ></path>
      <path fill="#000" d="M5 6a1 1 0 000 2h4a1 1 0 000-2H5z"></path>
    </svg>
  );
}

export default Icon;
