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
        d="M5 3h2v2H5V3zM5 8h2v2H5V8zM10 8h2v2h-2V8zM10 13h2v2h-2v-2zM10 3h2v2h-2V3zM5 13h2v2H5v-2z"
      ></path>
    </svg>
  );
}

export default Icon;
