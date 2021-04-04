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
        d="M4 10l-3 3V3a2 2 0 012-2h8a2 2 0 012 2v5a2 2 0 01-2 2H4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
