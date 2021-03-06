import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M2 2v10h2V8h2.6L7 9h4V3H7.5L7 2H2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
