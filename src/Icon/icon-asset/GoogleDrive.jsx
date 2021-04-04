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
      <path fill="#FCCD48" d="M12 11.5L6.5 2H12l5.5 9.5H12z"></path>
      <path
        fill="#0BA25E"
        fillRule="evenodd"
        d="M3.5 17l-3-4.997L6 2l3.175 5.435L3.5 17z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#2A71E9"
        fillRule="evenodd"
        d="M4 17l3-5h10.5L15 17H4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
