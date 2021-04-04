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
      <path fill="#000" d="M9 11V3L5 7l4 4z"></path>
    </svg>
  );
}

export default Icon;
