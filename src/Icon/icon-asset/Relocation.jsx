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
        d="M15 5h-2V1H2a2 2 0 00-2 2v11h1a3 3 0 006 0h4a3 3 0 106 0h1V9l-3-4zM4 15.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm10.5-9l2 2.5H13V6.5h1.5zm-.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
      ></path>
    </svg>
  );
}

export default Icon;
