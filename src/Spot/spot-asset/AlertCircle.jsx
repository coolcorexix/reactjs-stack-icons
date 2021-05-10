import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M26.5 47C37.822 47 47 37.822 47 26.5S37.822 6 26.5 6 6 15.178 6 26.5 15.178 47 26.5 47zM20 15a3 3 0 116 0v9a3 3 0 11-6 0v-9zm3 20a3 3 0 110-6 3 3 0 010 6z"
        clipRule="evenodd"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M23 12a3 3 0 00-3 3v9a3 3 0 106 0v-9a3 3 0 00-3-3zm-1 3a1 1 0 112 0v9a1 1 0 11-2 0v-9zM26.25 32a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zm-2 0a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M2 23.5C2 11.626 11.626 2 23.5 2S45 11.626 45 23.5 35.374 45 23.5 45 2 35.374 2 23.5zM23.5 4C12.73 4 4 12.73 4 23.5S12.73 43 23.5 43 43 34.27 43 23.5 34.27 4 23.5 4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
