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
      <circle cx="54" cy="51" r="18" fill="#000" opacity="0.2"></circle>
      <path
        fill="#000"
        d="M11.6 11A5.6 5.6 0 006 16.6v18.15a1.5 1.5 0 003 0V16.6a2.6 2.6 0 012.6-2.6h22.55a1.5 1.5 0 000-3H11.6zM64.9 11a1.5 1.5 0 000 3h20.5a2.6 2.6 0 012.6 2.6v18.15a1.5 1.5 0 003 0V16.6a5.6 5.6 0 00-5.6-5.6H64.9zM9 62a1.5 1.5 0 00-3 0v17.4a5.6 5.6 0 005.6 5.6h22.55a1.5 1.5 0 000-3H11.6A2.6 2.6 0 019 79.4V62zM91 62a1.5 1.5 0 00-3 0v17.4a2.6 2.6 0 01-2.6 2.6H64.9a1.5 1.5 0 000 3h20.5a5.6 5.6 0 005.6-5.6V62z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M48.5 29.05c-10.77 0-19.5 8.73-19.5 19.5s8.73 19.5 19.5 19.5S68 59.32 68 48.55s-8.73-19.5-19.5-19.5zM32 48.55c0-9.113 7.387-16.5 16.5-16.5S65 39.437 65 48.55s-7.387 16.5-16.5 16.5S32 57.663 32 48.55z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
