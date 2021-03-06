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
        d="M9 1c-4.42 0-7 .5-7 4v6.5A3.5 3.5 0 005.5 15L4 16.5v.5h10v-.5L12.5 15a3.5 3.5 0 003.5-3.5V5c0-3.5-2.58-4-7-4zM5.5 12.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM8 9H4V5h4v4zm4.5 3.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM14 9h-4V5h4v4z"
      ></path>
    </svg>
  );
}

export default Icon;
