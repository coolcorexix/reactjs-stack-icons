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
        fillRule="evenodd"
        d="M5 3a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM5.5 8h9a.5.5 0 010 1h-9a.5.5 0 010-1zM5 11.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M15.087 14.993H4.742a2.75 2.75 0 01-2.75-2.75V4.897a3.24 3.24 0 00-1 2.346v5.5a3.25 3.25 0 003.25 3.25h8.5a3.24 3.24 0 002.345-1z"
        opacity="0.4"
      ></path>
    </svg>
  );
}

export default Icon;
