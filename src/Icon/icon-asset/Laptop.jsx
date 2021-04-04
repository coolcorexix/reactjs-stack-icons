import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 18"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M3 4a2 2 0 012-2h14a2 2 0 012 2v10h3v2H0v-2h3V4zm16 0H5v9h14V4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
