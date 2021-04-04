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
      <path fill="#000" d="M5 8V5L1 9l4 4v-3h8v3l4-4-4-4v3H5z"></path>
    </svg>
  );
}

export default Icon;
