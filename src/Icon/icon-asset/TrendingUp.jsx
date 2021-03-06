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
        d="M11 4l2.29 2.29L10.5 9l-3-3L1 12.5 2.5 14l5-5 3 3 4.21-4.29L17 10V4h-6z"
      ></path>
    </svg>
  );
}

export default Icon;
