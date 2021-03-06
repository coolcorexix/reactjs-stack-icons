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
        d="M3.351 3.35A7.992 7.992 0 0117 9c0 4.42-3.572 8-7.995 8-3.732 0-6.844-2.55-7.735-6h2.081c.821 2.33 3.042 4 5.654 4a6.007 6.007 0 006.004-6c0-3.31-2.692-6-6.004-6-1.661 0-3.142.69-4.223 1.78L8.004 8H1V1l2.351 2.35z"
      ></path>
    </svg>
  );
}

export default Icon;
