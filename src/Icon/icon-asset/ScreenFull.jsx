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
        d="M3 1h4v2H3v4H1V3a2 2 0 012-2zM11 3V1h4a2 2 0 012 2v4h-2V3h-4zM3 11H1v4a2 2 0 002 2h4v-2H3v-4zM15 11h2v4a2 2 0 01-2 2h-4v-2h4v-4z"
      ></path>
    </svg>
  );
}

export default Icon;
