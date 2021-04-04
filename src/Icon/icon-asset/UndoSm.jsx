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
        d="M2.757 2.757A6 6 0 111.083 8h1.94A4.102 4.102 0 0011.1 7a4.1 4.1 0 00-7-2.9L6 6H1V1l1.757 1.757z"
      ></path>
    </svg>
  );
}

export default Icon;
