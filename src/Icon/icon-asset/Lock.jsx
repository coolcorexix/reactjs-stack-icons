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
        d="M16 9a2 2 0 00-2-2V6A5 5 0 004 6v1a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V9zm-7 5a2 2 0 110-4 2 2 0 010 4zm3.1-7H5.9V6a3.1 3.1 0 016.2 0v1z"
      ></path>
    </svg>
  );
}

export default Icon;
