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
        d="M3 1h12a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3c0-1.1.9-2 2-2zm1 8v5h2V9H4zm4-5v10h2V4H8zm4 3v7h2V7h-2z"
      ></path>
    </svg>
  );
}

export default Icon;
