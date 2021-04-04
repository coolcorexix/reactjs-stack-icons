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
        d="M7 13A6 6 0 117 .999 6 6 0 017 13zM6 3v5h2V3H6zm0 6v2h2V9H6z"
      ></path>
    </svg>
  );
}

export default Icon;
