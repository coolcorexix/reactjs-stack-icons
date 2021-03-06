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
        d="M7.3 13.63C8.38 12.277 12 7.553 12 5A5 5 0 002 5c0 2.553 3.62 7.277 4.7 8.63a.381.381 0 00.6 0zM7 7.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
