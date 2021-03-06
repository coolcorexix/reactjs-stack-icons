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
        d="M3.343 14.657A8 8 0 1014.657 3.343 8 8 0 003.343 14.657zm9.9-1.414a6 6 0 01-8.486 0l8.486-8.486a6 6 0 010 8.486z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
