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
        fill="#E01E5A"
        fillRule="evenodd"
        d="M6.5 16A1.5 1.5 0 015 14.5v-4a1.5 1.5 0 113 0v4A1.5 1.5 0 016.5 16zm-4-4a1.5 1.5 0 010-3H4v1.5A1.5 1.5 0 012.5 12z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#36C5F0"
        fillRule="evenodd"
        d="M2.5 5h4a1.5 1.5 0 110 3h-4a1.5 1.5 0 110-3zm4-4A1.5 1.5 0 018 2.5V4H6.5a1.5 1.5 0 110-3z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#ECB22E"
        fillRule="evenodd"
        d="M10.5 9h4a1.5 1.5 0 010 3h-4a1.5 1.5 0 010-3zm0 7A1.5 1.5 0 019 14.5V13h1.5a1.5 1.5 0 010 3z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#2EB67D"
        fillRule="evenodd"
        d="M10.5 1A1.5 1.5 0 0112 2.5v4a1.5 1.5 0 01-3 0v-4A1.5 1.5 0 0110.5 1zm4 4a1.5 1.5 0 010 3H13V6.5A1.5 1.5 0 0114.5 5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
