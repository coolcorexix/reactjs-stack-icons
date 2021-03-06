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
        fillRule="evenodd"
        d="M3.5 5A1.5 1.5 0 002 6.5v5A1.5 1.5 0 003.5 13h7a1.5 1.5 0 001.5-1.5v-5A1.5 1.5 0 0010.5 5v-.5a3.5 3.5 0 10-7 0V5zm1.4 0v-.5a2.1 2.1 0 114.2 0V5H4.9zm3.6 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
