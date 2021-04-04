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
        fill="#007DC1"
        fillRule="evenodd"
        d="M9 17A8 8 0 109 1a8 8 0 000 16zm0-4a4 4 0 110-8 4 4 0 010 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
