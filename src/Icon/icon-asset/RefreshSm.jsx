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
        d="M11.243 2.757L13 1v5H8l1.9-1.9A4.1 4.1 0 1010.977 8h1.939A6.002 6.002 0 011 7a6 6 0 0110.243-4.243z"
      ></path>
    </svg>
  );
}

export default Icon;
