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
        fill="#FFC166"
        d="M9 17c-2.2 0-4-1.57-4-3.5S6.8 10 9 10s4 1.57 4 3.5S11.2 17 9 17zm0-1.9c1.21 0 2.1-.78 2.1-1.6 0-.82-.89-1.6-2.1-1.6s-2.1.78-2.1 1.6c0 .82.89 1.6 2.1 1.6z"
      ></path>
      <g fill="#3F3F3F" opacity="0.4">
        <path d="M6.9 9.42a5.53 5.53 0 013.5-.24L4.5 1H1.47a.25.25 0 00-.2.39L6.9 9.42zM9.78 6.16L11.6 8.7h.01l5.11-7.3a.25.25 0 00-.2-.4H13.5L9.78 6.16z"></path>
      </g>
    </svg>
  );
}

export default Icon;
