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
      <circle cx="27" cy="26" r="9" fill="#000" opacity="0.2"></circle>
      <path
        fill="#000"
        d="M5 6a3 3 0 00-3 3v9.375a1 1 0 102 0V9a1 1 0 011-1h11.65a1 1 0 100-2H5zM32.4 6a1 1 0 100 2H43a1 1 0 011 1v9.375a1 1 0 102 0V9a3 3 0 00-3-3H32.4zM4 31.5a1 1 0 10-2 0V39a3 3 0 003 3h11.65a1 1 0 100-2H5a1 1 0 01-1-1v-7.5zM46 31.5a1 1 0 10-2 0V39a1 1 0 01-1 1H32.4a1 1 0 100 2H43a3 3 0 003-3v-7.5z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M24 14c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm-8 10a8 8 0 1116 0 8 8 0 01-16 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
