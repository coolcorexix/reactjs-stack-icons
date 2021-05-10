import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle cx="34.5" cy="36.5" r="5.5" fill="#000" opacity="0.2"></circle>
      <path
        fill="#000"
        d="M8 3a2 2 0 00-2 2v33a2 2 0 002 2h16.5a1 1 0 100-2H8V5h26v21a1 1 0 102 0V5a2 2 0 00-2-2H8z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M36.094 39.917a6.5 6.5 0 111.48-1.354l6.109 5.706a1 1 0 11-1.366 1.462l-6.223-5.814zM37 34.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M11 10a1 1 0 100 2h20a1 1 0 100-2H11zM10 17a1 1 0 011-1h20a1 1 0 110 2H11a1 1 0 01-1-1zM11 22a1 1 0 100 2h20a1 1 0 100-2H11zM10 29a1 1 0 011-1h11.077a1 1 0 110 2H11a1 1 0 01-1-1z"
      ></path>
    </svg>
  );
}

export default Icon;
