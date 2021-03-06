import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#000"
        d="M11 2V1H3v1H0v3c0 1.6 1.4 3 3 3 0 0 .5 2 3 2v1H4s-1 1.5-1 2h8c0-.4-1-2-1-2H8v-1c2.5 0 3-2 3-2 1.6-.2 3-1.4 3-3V2h-3zM3 6c-.5 0-1-.5-1-1V4h1v2zm9-1c0 .5-.5 1-1 1V4h1v1zM7 7a2 2 0 110-4 2 2 0 010 4z"
      ></path>
    </svg>
  );
}

export default Icon;
