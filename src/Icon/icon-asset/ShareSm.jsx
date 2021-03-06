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
        d="M5 1H2.994C1.894 1 1 1.893 1 2.994v8.012C1 12.106 1.893 13 2.994 13h8.012c1.1 0 1.994-.893 1.994-1.994V9h-2v2H3V3h2V1z"
      ></path>
      <path fill="#000" d="M7 1h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1z"></path>
    </svg>
  );
}

export default Icon;
