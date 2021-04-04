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
        d="M16.5 5c-2.61.7-4.67 1-7.5 1s-4.89-.3-7.5-1L1 7c1.86.5 3 .83 5 1v9h2v-6h2v6h2V8c2-.17 3.14-.5 5-1l-.5-2zM9 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
      ></path>
    </svg>
  );
}

export default Icon;
