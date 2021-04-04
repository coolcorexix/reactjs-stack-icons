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
        d="M7 3v2h2.58l-3.66 8H3v2h8v-2H8.42l3.66-8H15V3H7z"
      ></path>
    </svg>
  );
}

export default Icon;
