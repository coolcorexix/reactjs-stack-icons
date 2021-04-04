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
        d="M9 17A8 8 0 119 1a8 8 0 010 16zm0-2a6 6 0 004.889-9.479l-8.368 8.368A5.973 5.973 0 009 15zm-4.889-2.521l8.368-8.368a6 6 0 00-8.368 8.368z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
