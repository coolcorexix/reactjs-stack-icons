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
        d="M8 4.41L6.59 3l-6 6 6 6L8 13.59 3.41 9 8 4.41zM10 4.41L11.41 3l6 6-6 6L10 13.59 14.59 9 10 4.41z"
      ></path>
    </svg>
  );
}

export default Icon;
