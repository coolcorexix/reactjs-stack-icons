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
        fill="#F75D37"
        fillRule="evenodd"
        d="M4 2a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2V4a2 2 0 00-2-2H4zm2 7a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1h2v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h1a1 1 0 011 1H5v2h1zm4-3a1 1 0 011 1v5a1 1 0 01-1 1H9a1 1 0 01-1-1V7a1 1 0 011-1h1zm0 1H9v5h1V7zm4.707 2.293A1 1 0 0115 10v2a1 1 0 01-1 1h-1a1 1 0 01-1-1h2v-2h-1a1 1 0 01-1-1V7a1 1 0 011-1h1a1 1 0 011 1h-2v2h1a1 1 0 01.707.293z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
