import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 17 18"
    >
      <path
        fill="#000"
        d="M0 4a2 2 0 012-2h4a2 2 0 012 2v9l-1.75 3H4l1.75-3H2a2 2 0 01-2-2V4zM9 4a2 2 0 012-2h4a2 2 0 012 2v9l-1.75 3H13l1.75-3H11a2 2 0 01-2-2V4z"
      ></path>
    </svg>
  );
}

export default Icon;
