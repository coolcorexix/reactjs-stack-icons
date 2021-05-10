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
      <path
        fill="#000"
        fillRule="evenodd"
        d="M22.968 11.06c1.383-2.273 4.681-2.273 6.064 0L46 38.608C47.438 40.972 45.736 44 42.968 44H9.032C6.264 44 4.562 40.971 6 38.607L22.968 11.06zM23 37a3 3 0 100-6 3 3 0 000 6zm0-23a3 3 0 00-3 3v9a3 3 0 106 0v-9a3 3 0 00-3-3z"
        clipRule="evenodd"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M20 17a3 3 0 116 0v9a3 3 0 11-6 0v-9zm3-1a1 1 0 00-1 1v9a1 1 0 102 0v-9a1 1 0 00-1-1zM26.25 34a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zm-2 0a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M26.032 7.061c-1.383-2.273-4.681-2.273-6.064 0L2 36.609C.562 38.973 2.264 42 5.032 42h35.936c2.768 0 4.47-3.027 3.032-5.391L26.032 7.06zm-4.355 1.04a1.548 1.548 0 012.646 0L42.29 37.647A1.548 1.548 0 0140.968 40H5.032a1.548 1.548 0 01-1.323-2.352L21.677 8.1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
