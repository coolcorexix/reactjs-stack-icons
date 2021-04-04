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
        d="M5 8c1.12 2.201 2.799 3.872 5 5l2-2h2a2 2 0 012 2v1.5c0 .875-.625 1.5-1.5 1.5C7.197 16 2 10.803 2 3.5 2 2.625 2.625 2 3.5 2H5a2 2 0 012 2v2L5 8z"
      ></path>
    </svg>
  );
}

export default Icon;
