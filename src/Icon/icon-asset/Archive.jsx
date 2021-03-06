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
      <path fill="#000" d="M3 1a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2H3z"></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M2 5h14v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm4 3a1 1 0 001 1h4a1 1 0 100-2H7a1 1 0 00-1 1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
