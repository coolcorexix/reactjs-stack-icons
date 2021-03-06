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
        d="M13 6c0-1.5-1.57-3-3.5-3H4v12h6.25c1.79 0 3.25-1.71 3.25-3.5 0-1.3-.9-2.48-2-3 .83-.58 1.5-1 1.5-2.5zM6.5 5H9a1.5 1.5 0 010 3H6.5V5zm3 8h-3v-3h3a1.5 1.5 0 110 3z"
      ></path>
    </svg>
  );
}

export default Icon;
