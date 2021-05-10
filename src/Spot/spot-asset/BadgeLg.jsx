import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 96 96"
    >
      <path
        fill="#000"
        d="M19 24.5a1.5 1.5 0 011.5-1.5h52a1.5 1.5 0 010 3h-52a1.5 1.5 0 01-1.5-1.5z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M19.334 46.75c0-3.581 2.919-6.469 6.5-6.469 3.58 0 6.5 2.888 6.5 6.469 0 3.581-2.92 6.469-6.5 6.469-3.581 0-6.5-2.888-6.5-6.469zm6.5-3.469c-1.942 0-3.5 1.562-3.5 3.469 0 1.907 1.558 3.469 3.5 3.469 1.941 0 3.5-1.562 3.5-3.469 0-1.907-1.559-3.469-3.5-3.469z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M11 36.5a4.5 4.5 0 014.5-4.5h62a4.5 4.5 0 014.5 4.5v21a4.5 4.5 0 01-4.5 4.5h-62a4.5 4.5 0 01-4.5-4.5v-21zm4.5-1.5a1.5 1.5 0 00-1.5 1.5v21a1.5 1.5 0 001.5 1.5h62a1.5 1.5 0 001.5-1.5v-21a1.5 1.5 0 00-1.5-1.5h-62z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M72.5 72a1.5 1.5 0 000-3h-52a1.5 1.5 0 000 3h52z"
      ></path>
      <g fill="#000" opacity="0.2">
        <path d="M17 40a2 2 0 012-2h63a3 3 0 013 3v21a3 3 0 01-3 3H20a3 3 0 01-3-3V40z"></path>
        <path
          fillRule="evenodd"
          d="M25 16.5a1.5 1.5 0 011.5-1.5h40a1.5 1.5 0 010 3h-40a1.5 1.5 0 01-1.5-1.5zM68 78.5a1.5 1.5 0 01-1.5 1.5h-40a1.5 1.5 0 010-3h40a1.5 1.5 0 011.5 1.5z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
