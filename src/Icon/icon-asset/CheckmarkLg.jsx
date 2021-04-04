import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M6 14l8 8L30 6v8L14 30l-8-8v-8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
