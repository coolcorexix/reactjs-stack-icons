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
        d="M16 4.41L14.59 3 6 11.59 2.41 8 1 9.41l5 5 10-10z"
      ></path>
    </svg>
  );
}

export default Icon;
