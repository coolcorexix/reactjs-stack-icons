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
      <path fill="#8FD8F7" d="M3 4a2 2 0 012-2h8a2 2 0 012 2H3z"></path>
      <path fill="#155397" d="M15 11H3a2 2 0 002 2h5v3l3-3a2 2 0 002-2z"></path>
      <path fill="#46A2D9" d="M3 5H15V7H3z"></path>
      <path fill="#2D6DB5" d="M3 8H15V10H3z"></path>
    </svg>
  );
}

export default Icon;
