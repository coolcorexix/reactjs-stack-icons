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
        d="M1 4a2 2 0 012-2h12a2 2 0 012 2v7a2 2 0 01-2 2h-4l1 2v1H6v-1l1-2H3a2 2 0 01-2-2V4zm2 7h12V4H3v7z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
