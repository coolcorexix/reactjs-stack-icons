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
        fillRule="evenodd"
        d="M16 1a1 1 0 00-1 1v.375L5.298 6.013A2 2 0 004 7.886v2.228a2 2 0 001 1.732V13.5a3.5 3.5 0 006.87.951L15 15.625V16a1 1 0 102 0V2a1 1 0 00-1-1zM6.6 12.475l3.76 1.41A1.9 1.9 0 016.6 13.5v-1.025z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M2 6a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z"
      ></path>
    </svg>
  );
}

export default Icon;
