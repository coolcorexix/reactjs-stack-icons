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
        d="M4.2 1.334a5 5 0 016.468 6.463L17 14.13l-2.88 2.88-6.337-6.337A5 5 0 011.326 4.22l3.226 3.205 2.88-2.88-3.233-3.212z"
      ></path>
    </svg>
  );
}

export default Icon;
