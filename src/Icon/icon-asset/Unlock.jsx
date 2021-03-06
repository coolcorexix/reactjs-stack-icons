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
        d="M5.903 6.004A3.1 3.1 0 0111.3 3.919a.95.95 0 001.406-1.277 5 5 0 00-8.702 3.362L4.002 7H4a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V9a2 2 0 00-2-2H5.903v-.996zm1.683 7.41a2 2 0 112.828-2.828 2 2 0 01-2.828 2.828z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
