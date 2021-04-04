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
        d="M6.41 2L5 3.41 10.59 9 5 14.59 6.41 16l7-7-7-7z"
      ></path>
    </svg>
  );
}

export default Icon;
