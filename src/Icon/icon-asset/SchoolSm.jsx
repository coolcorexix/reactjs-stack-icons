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
      <path fill="#000" d="M1 5l6-4 6 4v5h-1V5.578L7 8.75 1 5z"></path>
      <path fill="#000" d="M7 13l-4-2.6V7.687l4 2.463 4-2.55v2.8L7 13z"></path>
    </svg>
  );
}

export default Icon;
