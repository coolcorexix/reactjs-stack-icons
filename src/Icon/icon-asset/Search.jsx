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
        d="M18 16.5l-5.136-5.179h-.356a7 7 0 10-1.186 1.186v.357L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
