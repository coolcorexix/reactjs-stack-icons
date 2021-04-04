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
        d="M8 2H6v4H2v2h4v4h2V8h4V6H8V2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
