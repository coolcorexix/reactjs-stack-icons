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
      <g fill="#000" opacity="0.2">
        <path d="M23 35a1 1 0 00-1 1v6a1 1 0 001 1h63a1 1 0 001-1v-6a1 1 0 00-1-1H23zM23 59a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6z"></path>
      </g>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M19.5 30a2.5 2.5 0 00-2.5 2.5v6a2.5 2.5 0 002.5 2.5h63a2.5 2.5 0 002.5-2.5v-6a2.5 2.5 0 00-2.5-2.5h-63zm.5 8v-5h62v5H20zM17 56.5a2.5 2.5 0 012.5-2.5h6a2.5 2.5 0 012.5 2.5v6a2.5 2.5 0 01-2.5 2.5h-6a2.5 2.5 0 01-2.5-2.5v-6zm3 .5v5h5v-5h-5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M18.5 22a1.5 1.5 0 000 3h15a1.5 1.5 0 000-3h-15zM17 48.5a1.5 1.5 0 011.5-1.5h65a1.5 1.5 0 010 3h-65a1.5 1.5 0 01-1.5-1.5zM33.5 58a1.5 1.5 0 000 3h12a1.5 1.5 0 000-3h-12z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M10 17.5a2.5 2.5 0 012.5-2.5h78a2.5 2.5 0 012.5 2.5v54a2.5 2.5 0 01-2.5 2.5H87v3.5a2.5 2.5 0 01-2.5 2.5h-78A2.5 2.5 0 014 77.5v-54A2.5 2.5 0 016.5 21H10v-3.5zM12.5 74a2.5 2.5 0 01-2.5-2.5V24H7v53h77v-3H12.5zm.5-56v53h77V18H13z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
