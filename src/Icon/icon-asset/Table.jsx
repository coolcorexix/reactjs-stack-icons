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
        d="M1 3a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm7 4V3H3v4h5zm0 4V9H3v2h5zm7-2h-5v2h5V9zm0 6v-2h-5v2h5zm-7-2H3v2h5v-2zm7-10h-5v4h5V3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
