import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 26 5"
    >
      <path
        fill="#000"
        d="M0 0h2v2H0V0zM3 3h2v2H3V3zM9 3h2v2H9V3zM15 3h2v2h-2V3zM21 3h2v2h-2V3zM6 0h2v2H6V0zM12 0h2v2h-2V0zM18 0h2v2h-2V0zM24 0h2v2h-2V0z"
      ></path>
    </svg>
  );
}

export default Icon;
