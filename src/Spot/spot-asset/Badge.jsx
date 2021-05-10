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
      <g fill="#000" opacity="0.2">
        <path d="M14 6a1 1 0 011-1h20a1 1 0 110 2H15a1 1 0 01-1-1zM7 21a2 2 0 012-2h35a3 3 0 013 3v10a3 3 0 01-3 3H10a3 3 0 01-3-3V21zM34 44a1 1 0 100-2H14a1 1 0 100 2h20z"></path>
      </g>
      <path
        fill="#000"
        d="M8 11a1 1 0 011-1h31a1 1 0 110 2H9a1 1 0 01-1-1z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M8 24a4 4 0 118 0 4 4 0 01-8 0zm4-2a2 2 0 100 4 2 2 0 000-4z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M3 18a3 3 0 013-3h36a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V18zm3-1a1 1 0 00-1 1v12a1 1 0 001 1h36a1 1 0 001-1V18a1 1 0 00-1-1H6z"
        clipRule="evenodd"
      ></path>
      <path fill="#000" d="M40 39a1 1 0 100-2H9a1 1 0 100 2h31z"></path>
    </svg>
  );
}

export default Icon;
