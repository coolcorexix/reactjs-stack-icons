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
        d="M1 16h4V2H1v14zm6 0h4V2H7v14zm6 0V2h4v14h-4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
