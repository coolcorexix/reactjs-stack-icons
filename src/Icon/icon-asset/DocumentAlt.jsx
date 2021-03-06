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
        d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h7a2 2 0 002-2V5a2 2 0 00-2-2H5zm2 3a1 1 0 11-2 0 1 1 0 012 0zm-2 4.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm.5 1.5h6a.5.5 0 010 1h-6a.5.5 0 010-1zM5 14.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M5.905 2h6.345A2.75 2.75 0 0115 4.75v9.345a3.24 3.24 0 001-2.345v-7.5A3.25 3.25 0 0012.75 1h-4.5a3.24 3.24 0 00-2.345 1z"
        opacity="0.4"
      ></path>
    </svg>
  );
}

export default Icon;
