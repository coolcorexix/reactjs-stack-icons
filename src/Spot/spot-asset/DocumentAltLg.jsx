import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 96 96"
    >
      <g fill="#000" opacity="0.2">
        <path
          fillRule="evenodd"
          d="M76.5 86.5a3 3 0 003-3V9c3.314 0 7.5.686 7.5 4v75a6 6 0 01-6 6H20c-3.314 0-3.5-3-3.5-7.5h60z"
          clipRule="evenodd"
        ></path>
        <path d="M36 21a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </g>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M25 26a8 8 0 100-16 8 8 0 000 16zm0-13a5 5 0 110 10 5 5 0 010-10z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M19.5 43a1.5 1.5 0 000 3h50a1.5 1.5 0 000-3h-50zM19.5 53a1.5 1.5 0 000 3h50a1.5 1.5 0 000-3h-50zM19.5 63a1.5 1.5 0 000 3h50a1.5 1.5 0 000-3h-50zM19.5 73a1.5 1.5 0 000 3h50a1.5 1.5 0 000-3h-50z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M8 5.5A4.5 4.5 0 0112.5 1h64A4.5 4.5 0 0181 5.5V8h2.5a4.5 4.5 0 014.5 4.5v78a4.5 4.5 0 01-4.5 4.5h-64a4.5 4.5 0 01-4.5-4.5V88h-2.5A4.5 4.5 0 018 83.5v-78zM18 88v2.5a1.5 1.5 0 001.5 1.5h64a1.5 1.5 0 001.5-1.5v-78a1.5 1.5 0 00-1.5-1.5H81v72.5a4.5 4.5 0 01-4.5 4.5H18zM12.5 4A1.5 1.5 0 0011 5.5v78a1.5 1.5 0 001.5 1.5h64a1.5 1.5 0 001.5-1.5v-78A1.5 1.5 0 0076.5 4h-64z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
