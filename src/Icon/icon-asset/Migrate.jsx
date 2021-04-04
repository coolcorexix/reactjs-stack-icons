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
        d="M14 3H5V1h9a2 2 0 012 2v12a2 2 0 01-2 2H5v-2h9V3z"
      ></path>
      <path fill="#000" d="M2 10V8h5V5l4 4-4 4v-3H2z"></path>
    </svg>
  );
}

export default Icon;
