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
        d="M6 6a2 2 0 012-2h4.5L16 7.5V15a2 2 0 01-2 2H8a2 2 0 01-2-2V6zm6-1.25V8h3.25L12 4.75z"
      ></path>
      <path
        fill="#000"
        d="M11 1a2 2 0 012 2H7a2 2 0 00-2 2v9a2 2 0 01-2-2V4a3 3 0 013-3h5z"
        opacity="0.4"
      ></path>
    </svg>
  );
}

export default Icon;
