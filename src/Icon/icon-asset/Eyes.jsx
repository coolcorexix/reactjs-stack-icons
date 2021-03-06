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
        fill="#888"
        fillRule="evenodd"
        d="M9.5 3.436A4.5 4.5 0 001 5.5v8a4.5 4.5 0 008.5 2.064A4.5 4.5 0 0018 13.5v-8a4.5 4.5 0 00-8.5-2.064zM9 5.5v8a3.5 3.5 0 11-7 0v-8a3.5 3.5 0 117 0zm1 8v-8a3.5 3.5 0 117 0v8a3.5 3.5 0 11-7 0z"
        clipRule="evenodd"
        opacity="0.4"
      ></path>
      <g fill="#8E8E8E" opacity="0.1">
        <path d="M5.5 2A3.5 3.5 0 019 5.5v8a3.5 3.5 0 11-7 0v-8A3.5 3.5 0 015.5 2zM13.5 2A3.5 3.5 0 0117 5.5v8a3.5 3.5 0 11-7 0v-8A3.5 3.5 0 0113.5 2z"></path>
      </g>
      <path
        fill="#1A1104"
        d="M5.44 10.44A1.5 1.5 0 018 11.5v2a1.5 1.5 0 01-3 0v-2c0-.398.158-.78.44-1.06zM13.44 10.44A1.5 1.5 0 0116 11.5v2a1.5 1.5 0 11-3 0v-2c0-.398.158-.78.44-1.06z"
      ></path>
    </svg>
  );
}

export default Icon;
