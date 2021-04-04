import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#000"
        d="M6.528.746c.257-.329.675-.327.93 0l4.42 5.66c.258.329.257.864 0 1.192l-4.42 5.66c-.256.328-.674.327-.93 0l-4.42-5.66c-.257-.329-.256-.865 0-1.192l4.42-5.66z"
      ></path>
    </svg>
  );
}

export default Icon;
