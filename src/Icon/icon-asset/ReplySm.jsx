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
      <path
        fill="#000"
        d="M5 4V1L0 6.5 5 12V8.425c3.75 0 6.625 1.2 8.5 3.825C12.75 8.5 10.25 4.75 5 4z"
      ></path>
    </svg>
  );
}

export default Icon;
