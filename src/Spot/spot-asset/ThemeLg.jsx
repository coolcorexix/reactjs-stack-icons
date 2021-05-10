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
        d="M65.65 20.806a2 2 0 00-2.83 0L33 50.626v40.122l49.881-49.881a2 2 0 000-2.829L65.65 20.806z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M25 78.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0zm-3 0a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M2 6.5A4.5 4.5 0 016.5 2h22A4.5 4.5 0 0133 6.5v34.755l27.303-27.302a4.5 4.5 0 016.364 0L82.485 29.77a4.5 4.5 0 010 6.364L55.619 63H89.5a4.5 4.5 0 014.5 4.5v22a4.5 4.5 0 01-4.5 4.5h-83A4.5 4.5 0 012 89.5v-83zM52.62 66L33 85.62v3.88c0 .526-.09 1.03-.256 1.5H89.5a1.5 1.5 0 001.5-1.5v-22a1.5 1.5 0 00-1.5-1.5H52.62zM33 81.377l47.363-47.364a1.5 1.5 0 000-2.121L64.546 16.074a1.5 1.5 0 00-2.122 0L33 45.498v35.879zM6.5 5A1.5 1.5 0 005 6.5v83A1.5 1.5 0 006.5 91h22a1.5 1.5 0 001.5-1.5v-83A1.5 1.5 0 0028.5 5h-22z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
