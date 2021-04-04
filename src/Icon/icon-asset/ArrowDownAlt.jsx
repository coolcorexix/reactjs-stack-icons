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
        d="M16.014 6.428l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 7 7 7-7z"
      ></path>
    </svg>
  );
}

export default Icon;
