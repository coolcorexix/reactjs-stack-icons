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
      <path fill="#000" d="M9 1l7 7H2l7-7zM9 17l7-7H2l7 7z"></path>
    </svg>
  );
}

export default Icon;
