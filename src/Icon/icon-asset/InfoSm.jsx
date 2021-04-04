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
        d="M7 1a6 6 0 110 12A6 6 0 017 1zm1 10V6H6v5h2zm0-6V3H6v2h2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
