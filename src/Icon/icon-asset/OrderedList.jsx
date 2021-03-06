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
        fillRule="evenodd"
        d="M3 6h1V2H2v1h1v3zm.8 2H2V7h3v.9L3.2 10H5v1H2v-.9L3.8 8zM2 13v-1h3v4H2v-1h2v-.5H3v-1h1V13H2zm5-8V3h9v2H7zm0 10h9v-2H7v2zm9-5H7V8h9v2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
