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
        d="M13 3.41L11.59 2 5 8.59 2.41 6 1 7.41l4 4 8-8z"
      ></path>
    </svg>
  );
}

export default Icon;
