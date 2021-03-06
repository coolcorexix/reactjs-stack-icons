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
        d="M1 3a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm9.71 2L9.3 6.41 11.89 9 9.3 11.59 10.71 13l4-4-4-4zM8.714 6.41L7.303 5l-4 4 4 4 1.41-1.41L6.123 9l2.59-2.59z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
