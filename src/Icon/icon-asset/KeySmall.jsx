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
        d="M8.83 10a3.001 3.001 0 110-2H15v2h-2v2h-2v-2H8.83zM6 10.309A1.309 1.309 0 106 7.69a1.309 1.309 0 000 2.618z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
