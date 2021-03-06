import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#000"
        d="M6.014 6.767a2.79 2.79 0 001.22 1.219L6.456 9.51l-.001-.001a4.5 4.5 0 115.226-.827l-1.21-1.21a2.79 2.79 0 10-4.458-.705z"
      ></path>
      <path
        fill="#000"
        d="M6.767 6.014l.776-1.524a4.5 4.5 0 11-5.225.828l1.21 1.21a2.79 2.79 0 103.239-.514z"
      ></path>
    </svg>
  );
}

export default Icon;
