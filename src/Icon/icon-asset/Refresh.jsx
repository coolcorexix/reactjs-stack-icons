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
        d="M14.649 3.35A7.965 7.965 0 008.995 1 7.992 7.992 0 001 9c0 4.42 3.572 8 7.995 8 3.732 0 6.844-2.55 7.735-6h-2.082c-.82 2.33-3.041 4-5.653 4a6.007 6.007 0 01-6.004-6c0-3.31 2.692-6 6.004-6 1.661 0 3.142.69 4.223 1.78L9.996 8H17V1l-2.351 2.35z"
      ></path>
    </svg>
  );
}

export default Icon;
