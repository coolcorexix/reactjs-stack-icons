import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 17 18"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M7 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
