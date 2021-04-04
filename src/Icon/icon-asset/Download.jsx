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
        d="M16 7h-4V2a1 1 0 00-1-1H7a1 1 0 00-1 1v5H2l7 7 7-7zM2 15v2h14v-2H2z"
      ></path>
    </svg>
  );
}

export default Icon;
