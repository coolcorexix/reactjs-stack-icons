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
        d="M1 17l3-3h11a2 2 0 002-2V3a2 2 0 00-2-2H3a2 2 0 00-2 2v14zM8 3h2v5H8V3zm0 7h2v2H8v-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
