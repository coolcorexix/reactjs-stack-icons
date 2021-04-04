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
        d="M3 3h5v5H3V3zm7 0h5v5h-5V3zm0 7h5v5h-5v-5zm-7 0h5v5H3v-5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
