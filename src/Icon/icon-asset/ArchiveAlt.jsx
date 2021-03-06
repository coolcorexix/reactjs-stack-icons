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
        d="M3 1a2 2 0 00-2 2v1h16V3a2 2 0 00-2-2H3zM2 5v10a2 2 0 002 2h10a2 2 0 002-2V5h-2v10H4V5H2z"
      ></path>
      <path fill="#000" d="M7 7a1 1 0 000 2h4a1 1 0 100-2H7z"></path>
    </svg>
  );
}

export default Icon;
