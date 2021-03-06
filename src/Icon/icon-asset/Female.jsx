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
        d="M4 6a5.002 5.002 0 004 4.9V13H6v2h2v2h2v-2h2v-2h-2v-2.1A5.002 5.002 0 009 1a5 5 0 00-5 5zm8 0a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
