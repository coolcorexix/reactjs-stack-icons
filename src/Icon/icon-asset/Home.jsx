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
        d="M15 10v5c0 1.105-.902 2-2.008 2H5.009A2 2 0 013 15v-5H0l9-9 9 9h-3zm-8 1v6h4v-6H7z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
