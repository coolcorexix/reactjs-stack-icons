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
        d="M7 7h1V1h2v6c0 1.696-1.328 2.896-3 3v7H5v-7c-1.672-.104-3-1.304-3-3V1h2v6h1V1h2v6zm5 3V4.2C12 2.792 13.792 1 16 1v16h-2v-7h-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
