import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 12 18"
    >
      <path
        fill="#000"
        d="M5 1h2v4h4v2H7v4H5V7H1V5h4V1zM11 15H1v2h10v-2z"
      ></path>
    </svg>
  );
}

export default Icon;
