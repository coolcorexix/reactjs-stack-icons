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
        d="M10.5 3.5L8 7.25l2 2.25L8.5 11l-3-3.5L1 14h16L10.5 3.5z"
      ></path>
    </svg>
  );
}

export default Icon;
