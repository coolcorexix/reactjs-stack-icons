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
        d="M14 2h1a2 2 0 012 2v11a2 2 0 01-2 2H3a2 2 0 01-2-2V4c0-1.1.9-2 2-2h1V0h2v2h6V0h2v2zM3 6v9h12V6H3zm2 2h2v2H5V8zm0 3h2v2H5v-2zm3 0h2v2H8v-2zm3 0h2v2h-2v-2zm0-3h2v2h-2V8zM8 8h2v2H8V8z"
      ></path>
    </svg>
  );
}

export default Icon;
