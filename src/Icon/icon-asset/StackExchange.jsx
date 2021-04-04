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
        d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2zM1 13a2 2 0 002 2h8v3l3-3h1a2 2 0 002-2v-2H1v2zm16-7H1v4h16V6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
