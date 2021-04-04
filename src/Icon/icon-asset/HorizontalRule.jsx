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
      <path fill="#000" d="M2 8h14v2H2V8z"></path>
      <path
        fill="#000"
        d="M2 2h14v1H2V2zm0 3h14v1H2V5zm0 7h14v1H2v-1zm0 3h14v1H2v-1z"
        opacity="0.4"
      ></path>
    </svg>
  );
}

export default Icon;
