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
      <path fill="#000" d="M1 5a2 2 0 012-2h12a2 2 0 012 2v2H1V5z"></path>
      <path fill="#D00" d="M1 7H17V11H1z"></path>
      <path
        fill="#FFCE00"
        d="M1 11h16v2a2 2 0 01-2 2H3a2 2 0 01-2-2v-2z"
      ></path>
    </svg>
  );
}

export default Icon;
