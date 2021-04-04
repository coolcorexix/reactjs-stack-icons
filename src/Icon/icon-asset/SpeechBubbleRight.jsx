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
        d="M14 14H3c-1.09 0-2-.91-2-2V3c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v14l-3-3z"
      ></path>
    </svg>
  );
}

export default Icon;
