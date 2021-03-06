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
      <path fill="#000" d="M9 12a3 3 0 100-6 3 3 0 000 6z"></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M9 0a1 1 0 00-1 1v1.07A7.005 7.005 0 002.07 8H1a1 1 0 100 2h1.07A7.004 7.004 0 008 15.93V17a1 1 0 102 0v-1.07A7.004 7.004 0 0015.93 10H17a1 1 0 100-2h-1.07A7.004 7.004 0 0010 2.07V1a1 1 0 00-1-1zm5 9A5 5 0 114 9a5 5 0 0110 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
