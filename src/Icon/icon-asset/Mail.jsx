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
        d="M1 6l8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6z"
      ></path>
    </svg>
  );
}

export default Icon;
