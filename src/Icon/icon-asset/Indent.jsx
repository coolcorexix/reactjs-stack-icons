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
        d="M16 4H2V2h14v2zM8 6v2h8V6H8zM16 16H2v-2h14v2zM8 12h8v-2H8v2zM6.5 9L2 5v8l4.5-4z"
      ></path>
    </svg>
  );
}

export default Icon;
