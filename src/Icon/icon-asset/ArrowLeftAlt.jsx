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
        d="M10.582 16l1.41-1.41L6.402 9l5.59-5.59L10.582 2l-7 7 7 7z"
      ></path>
    </svg>
  );
}

export default Icon;
