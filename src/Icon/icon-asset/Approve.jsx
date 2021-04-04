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
        fill="#5EBA7D"
        fillRule="evenodd"
        d="M9 17A8 8 0 109 1a8 8 0 000 16zm.25-3.45c-.15.268-.426.456-.73.5-.32 0-.616-.058-.85-.29l-3-3a1.01 1.01 0 01.08-1.358 1.01 1.01 0 011.36-.022l2.05 2 3.56-6.28a1.01 1.01 0 011.36-.38c.473.267.646.886.38 1.36l-4.21 7.47z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
