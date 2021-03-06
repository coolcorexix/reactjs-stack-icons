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
        d="M9.667 1.5a1 1 0 01.866-.5H12a1 1 0 110 2h-.89L9.666 5.5A1 1 0 018.8 6H6.618l-3.224 6.447a1 1 0 11-1.788-.894l3.5-7A1 1 0 016 4h2.223l1.444-2.5z"
        clipRule="evenodd"
      ></path>
      <g fill="#000" opacity="0.2">
        <path d="M1 2a1 1 0 011-1h5a1 1 0 010 2H2a1 1 0 01-1-1zM1 5a1 1 0 112 0 1 1 0 01-2 0zM12 4a1 1 0 100 2 1 1 0 000-2zM8 8a1 1 0 011-1h3a1 1 0 110 2H9a1 1 0 01-1-1zM7 10a1 1 0 100 2h5a1 1 0 100-2H7z"></path>
      </g>
    </svg>
  );
}

export default Icon;
