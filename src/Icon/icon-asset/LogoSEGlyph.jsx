import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 25 30"
    >
      <path
        fill="#8FD8F7"
        fillRule="evenodd"
        d="M24 6H1.081V4.919C1.081 2.87 2.977 1 5 1h15.081C22.105 1 24 2.871 24 4.919V6z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#155397"
        fillRule="evenodd"
        d="M1 20v1c0 2.048 2 4 3.919 4H15v4.703L19.595 25h.486C22.105 25 24 23.048 24 21v-1H1z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#2D6DB5"
        fillRule="evenodd"
        d="M1 14v4h23v-4H1z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#46A2D9"
        fillRule="evenodd"
        d="M1 8v4h23.027V8H1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
