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
        d="M9 17A8 8 0 119 1a8 8 0 010 16zM8 4v6h2V4H8zm0 8v2h2v-2H8z"
      ></path>
    </svg>
  );
}

export default Icon;
