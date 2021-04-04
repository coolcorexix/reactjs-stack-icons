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
      <path
        fill="#000"
        d="M9.955 8.725h.31l2.74 2.78-1.5 1.5-2.78-2.73v-.32a5.5 5.5 0 111.23-1.23zm-4.45.28a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
      ></path>
    </svg>
  );
}

export default Icon;
