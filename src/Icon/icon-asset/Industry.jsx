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
        d="M10 16v-4H8v4H2V4c0-1.1.9-2 2-2h6a2 2 0 012 2v2h2a2 2 0 012 2v8h-6zM4 4v2h2V4H4zm0 4v2h2V8H4zm4-4v2h2V4H8zm0 4v2h2V8H8zm-4 4v2h2v-2H4zm8 0v2h2v-2h-2zm0-4v2h2V8h-2z"
      ></path>
    </svg>
  );
}

export default Icon;
