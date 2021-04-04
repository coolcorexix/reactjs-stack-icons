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
      <path fill="#000" d="M1 6l8-5 8 5v8h-2V7.09L9 11 1 6z"></path>
      <path fill="#000" d="M9 16.82L3 13V9l6 3.82 5-3.32v4l-5 3.32z"></path>
    </svg>
  );
}

export default Icon;
