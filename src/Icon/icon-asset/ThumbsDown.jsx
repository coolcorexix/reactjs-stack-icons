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
        fill="#07C"
        d="M1 6.5A1.5 1.5 0 012.5 5H4v6H2.5A1.5 1.5 0 011 9.5v-3z"
        opacity="0.7"
      ></path>
      <path
        fill="#FFC166"
        d="M5 4.947v6s3.94 5.285 4.203 5.61c.262.325.64.453.961.453.321 0 .601-.144.836-.363.342-.318.484-1.229.44-1.888a3.32 3.32 0 00-.69-1.812c-.23-.31.04-.781.49-.71 0 0 1.71.33 2.3.36.59.03 2.71.126 2.71-1.68s-.969-4.524-1.4-5.44c-.431-.915-1.19-2.15-2.11-2.38a4.83 4.83 0 00-2.64.05L5 4.947z"
      ></path>
    </svg>
  );
}

export default Icon;
