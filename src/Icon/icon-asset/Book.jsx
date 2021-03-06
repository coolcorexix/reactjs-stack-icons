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
        d="M2 3a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H4a1 1 0 100 2h1v-1h4v1h5a2 2 0 002-2v1a2 2 0 01-2 2H9v2l-2-1-2 1v-2H4a2 2 0 01-2-2V3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
