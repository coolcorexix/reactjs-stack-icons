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
        d="M1 3c0-1.1.9-2 2-2h12a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm14.5 12C15.5 8.1 9.9 2.5 3 2.5V5a10 10 0 0110 10h2.5zm-5 0A7.5 7.5 0 003 7.5V10a5 5 0 015 5h2.5zm-5 0A2.5 2.5 0 003 12.5V15h2.5z"
      ></path>
    </svg>
  );
}

export default Icon;
