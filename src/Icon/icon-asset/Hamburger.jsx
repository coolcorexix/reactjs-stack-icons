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
        d="M2 3h14v2H2V3zM2 8h14v2H2V8zM16 13H2v2h14v-2z"
      ></path>
    </svg>
  );
}

export default Icon;
