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
        d="M5.5 3.5L1 8h3v4h3V8h3L5.5 3.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M11 6v3H8l4.5 5.5L17 9h-3V6h-3z"
        clipRule="evenodd"
        opacity="0.5"
      ></path>
    </svg>
  );
}

export default Icon;
