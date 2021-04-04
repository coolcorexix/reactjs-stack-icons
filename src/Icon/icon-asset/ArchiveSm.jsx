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
      <path fill="#000" d="M1 3a2 2 0 012-2h8a2 2 0 012 2H1z"></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M12 4H2v7a2 2 0 002 2h6a2 2 0 002-2V4zM4.5 6h5a.5.5 0 010 1h-5a.5.5 0 010-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
