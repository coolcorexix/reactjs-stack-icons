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
        fillRule="evenodd"
        d="M4 3a1 1 0 011-1h4a1 1 0 011 1v1h.5A1.5 1.5 0 0112 5.5v5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 012 10.5v-5A1.5 1.5 0 013.5 4H4V3zm5 1V3H5v1h4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
