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
        fill="#000"
        fillRule="evenodd"
        d="M14.42 6.48a.75.75 0 000-1.06l-1.84-1.84a.75.75 0 00-1.06 0L.58 14.52a.75.75 0 000 1.06l1.84 1.84a.75.75 0 001.06 0L14.42 6.48zm-2.375-2.435l1.91 1.91-3 3-1.91-1.91 3-3z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M8 0H7v1H6v1h1v1h1V2h1V1H8V0zM17 2h-1V1h-1v1h-1v1h1v1h1V3h1V2zM15 11h1v1h-1v1h-1v-1h-1v-1h1v-1h1v1z"
      ></path>
    </svg>
  );
}

export default Icon;
