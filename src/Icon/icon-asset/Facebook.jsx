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
        fill="#4167B2"
        fillRule="evenodd"
        d="M3 1a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2H3zm6.546 16v-6.196H7.46V8.39h2.086V6.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V17H9.546z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
