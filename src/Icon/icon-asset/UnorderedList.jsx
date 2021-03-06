import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 17 18"
    >
      <path
        fill="#000"
        d="M4.25 4a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM15 5H6V3h9v2zM15 15H6v-2h9v2zM6 10h9V8H6v2zM4.25 14a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM3 10.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
      ></path>
    </svg>
  );
}

export default Icon;
