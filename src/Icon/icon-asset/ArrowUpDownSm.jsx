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
      <path fill="#000" d="M7 2l4 4H3l4-4zM7 12l4-4H3l4 4z"></path>
    </svg>
  );
}

export default Icon;
