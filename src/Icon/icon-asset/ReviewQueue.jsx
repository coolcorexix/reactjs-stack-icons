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
        d="M11 12.47l5-4.97V3a2 2 0 00-2-2H2C.9 1 0 1.9 0 3v12a2 2 0 002 2h6.5l-2.79-2.8a1 1 0 010-1.4l2.1-2.1a1 1 0 011.4 0L11 12.47zM2 7h10v2H2V7zm0-4h12v2H2V3zm0 10v-2h3v2H2z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M11 17.5l7-7L16.5 9 11 14.5 8.5 12 7 13.5l4 4z"
      ></path>
    </svg>
  );
}

export default Icon;
