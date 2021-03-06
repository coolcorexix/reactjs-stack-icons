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
        fillRule="evenodd"
        d="M2 3.25L7.5 1 13 3.235V7c0 3.502-4.293 6-5.5 6C6.293 13 2 10.518 2 7.015V3.25zM6.855 7.6L6 10h3l-.855-2.4a.525.525 0 01.188-.506C8.752 6.786 9 6.066 9 5.5 9 4.566 8.295 4 7.485 4 6.668 4 6 4.566 6 5.5c0 .566.247 1.286.668 1.594.147.109.222.31.187.506z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
