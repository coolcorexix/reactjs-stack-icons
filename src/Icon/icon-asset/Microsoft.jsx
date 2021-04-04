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
      <path fill="#00A4EF" d="M9 18H1v-8h8v8z"></path>
      <path
        fill="#FFB902"
        fillRule="evenodd"
        d="M18 18h-8v-8h8v8z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F25C33"
        fillRule="evenodd"
        d="M9 9H1V1h8v8z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#7FBA00"
        fillRule="evenodd"
        d="M18 9h-8V1h8v8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
