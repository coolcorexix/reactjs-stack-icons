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
        d="M9 1L2 4v5.02C2 13.69 7.31 17 9 17c1.69 0 7-3.31 7-7.98V4L9 1zm1 9v3H8v-3H5V8h3V5h2v3h3v2h-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
