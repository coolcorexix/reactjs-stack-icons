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
        d="M3 2v14h2v-6h3.6l.4 1h6V3H9.5L9 2H3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
