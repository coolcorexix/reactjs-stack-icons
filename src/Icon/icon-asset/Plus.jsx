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
        fillRule="evenodd"
        d="M10 2H8v6H2v2h6v6h2v-6h6V8h-6V2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
