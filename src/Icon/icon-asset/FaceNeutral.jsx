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
      <circle cx="9" cy="9" r="8" fill="#FFAA3B" opacity="0.4"></circle>
      <path
        fill="#FF9700"
        d="M8.41 17a10 10 0 01.38-15.75c.1-.075.194-.159.28-.25a8 8 0 00-5.73 13.66A7.93 7.93 0 008.41 17z"
        opacity="0.3"
      ></path>
      <path
        fill="#1A1104"
        d="M6.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM6.25 10a1.25 1.25 0 100 2.5h5.5a1.25 1.25 0 100-2.5h-5.5z"
      ></path>
    </svg>
  );
}

export default Icon;
