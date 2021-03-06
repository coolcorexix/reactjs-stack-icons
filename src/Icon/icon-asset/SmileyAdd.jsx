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
      <path fill="#000" d="M13 0h2v3h3v2h-3v3h-2V5h-3V3h3V0z"></path>
      <path
        fill="#000"
        d="M6.44 2.154A8 8 0 018 2v2a6 6 0 106 6h2a8 8 0 11-9.56-7.846z"
      ></path>
      <path
        fill="#000"
        d="M8.1 14.22a5.51 5.51 0 01-3.72-1.6.88.88 0 011.24-1.24 3.241 3.241 0 004.76 0 .88.88 0 011.24 1.24 4.9 4.9 0 01-3.52 1.6zM7.25 8a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM10 9.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
      ></path>
    </svg>
  );
}

export default Icon;
