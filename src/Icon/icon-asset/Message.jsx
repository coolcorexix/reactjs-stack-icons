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
        d="M4 14l-3 3V3c0-1.1.9-2 2-2h12a2 2 0 012 2v9a2 2 0 01-2 2H4zm0-8v1h10V6H4zm0-2v1h10V4H4zm0 4v1h10V8H4zm0 2v1h7v-1H4z"
      ></path>
    </svg>
  );
}

export default Icon;
