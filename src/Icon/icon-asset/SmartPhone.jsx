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
        d="M6 1h6a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V3c0-1.1.9-2 2-2zm0 2v10h6V3H6zm3 13.2a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
      ></path>
    </svg>
  );
}

export default Icon;
