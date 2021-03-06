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
        d="M6.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.104 14c-1.979 0-3.854-1.132-4.791-2.057a1.109 1.109 0 010-1.543c.416-.515 1.145-.515 1.666-.103.313.308 3.23 2.88 6.146 0a1.057 1.057 0 011.563.103 1.109 1.109 0 010 1.543C12.124 13.383 10.562 14 9.104 14zM13 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      ></path>
    </svg>
  );
}

export default Icon;
