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
        d="M10 3H8V1h2v2zm4 5H4a1 1 0 01-1-1V5a1 1 0 011-1h10l2 2-2 2zm-4-3H8v2h2V5zM8 17h2V9H8v8z"
      ></path>
    </svg>
  );
}

export default Icon;
