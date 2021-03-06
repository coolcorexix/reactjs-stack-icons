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
        d="M13.68 2.15l2.17 2.17c.2.2.2.51 0 .71L14.5 6.39l-2.88-2.88 1.35-1.36c.2-.2.51-.2.71 0zM2 13.13l8.5-8.5 2.88 2.88-8.5 8.5H2v-2.88z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
