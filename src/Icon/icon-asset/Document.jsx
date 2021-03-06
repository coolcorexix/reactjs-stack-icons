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
        d="M3 2.994C3 1.893 3.887 1 4.998 1H11l4 4v9.992A2.01 2.01 0 0112.992 17H5.009A2.002 2.002 0 013 15.006V2.994zM10 1.5V6h4.5L10 1.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
