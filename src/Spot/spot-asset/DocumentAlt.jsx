import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <g fill="#000" opacity="0.2">
        <path
          fillRule="evenodd"
          d="M39 6c2.5 0 4 0 4 2v35a3 3 0 01-3 3H11c-2 0-2-2.343-2-4h30V6z"
          clipRule="evenodd"
        ></path>
        <path d="M20 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </g>
      <path
        fill="#000"
        d="M10 20a1 1 0 100 2h24a1 1 0 100-2H10zM10 25a1 1 0 100 2h24a1 1 0 100-2H10zM10 30a1 1 0 100 2h24a1 1 0 100-2H10zM10 35a1 1 0 100 2h24a1 1 0 100-2H10z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M4 4a3 3 0 013-3h30a3 3 0 013 3v1h.914C42.618 5 44 6.312 44 7.93v36.14c0 1.618-1.382 2.93-3.086 2.93H11.086C9.382 47 8 45.688 8 44.07V43H7a3 3 0 01-3-3V4zm6.057 39v1.07c0 .54.46.977 1.029.977h29.828c.568 0 1.029-.438 1.029-.977V7.93c0-.54-.46-.977-1.029-.977H40V40a3 3 0 01-3 3H10.057zM7 3a1 1 0 00-1 1v36a1 1 0 001 1h30a1 1 0 001-1V4a1 1 0 00-1-1H7z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M13.5 13a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0 2a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
