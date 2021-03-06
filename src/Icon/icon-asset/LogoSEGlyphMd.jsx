import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 32 37"
    >
      <path
        fill="#8FD8F7"
        fillRule="evenodd"
        d="M31 7H1V6c0-2.613 2.42-5 5-5h20c2.582 0 5 2.387 5 5v1z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#155397"
        fillRule="evenodd"
        d="M1 25v1c0 2.613 2.42 5 5 5h13v6l6-6h1c2.582 0 5-2.387 5-5v-1H1z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#2D6DB5"
        fillRule="evenodd"
        d="M1 17v6h30v-6H1z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#46A2D9"
        fillRule="evenodd"
        d="M1 9v6h30V9H1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
