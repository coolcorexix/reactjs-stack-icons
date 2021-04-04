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
        d="M15 2a1 1 0 011 1v1H2V3a1 1 0 011-1h2a1 1 0 011-1h6a1 1 0 011 1h2zM15 5H3v10a2 2 0 002 2h8a2 2 0 002-2V5z"
      ></path>
    </svg>
  );
}

export default Icon;
