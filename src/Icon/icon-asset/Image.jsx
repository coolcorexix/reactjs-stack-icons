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
        d="M1 3c0-1.1.9-2 2-2h12a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm4.5 7.5L2 15h14l-4.5-6L8 13.51 5.5 10.5zm0-4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
    </svg>
  );
}

export default Icon;
