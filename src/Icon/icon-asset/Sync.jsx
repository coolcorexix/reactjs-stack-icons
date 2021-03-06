import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 22 18"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M11 1C6.58 1 3 4.58 3 9H0l4 4 4-4H5c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0011 1zm3 8h3c0 3.31-2.69 6-6 6a5.87 5.87 0 01-2.8-.7l-1.46 1.46A7.93 7.93 0 0011 17c4.42 0 8-3.58 8-8h3l-4-4-4 4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
