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
        fillOpacity="0.4"
        d="M10.26 17h-.2a3.61 3.61 0 01-3.61-3.61.5.5 0 111 0A2.61 2.61 0 0010.06 16h.2a2.61 2.61 0 002.61-2.61.52.52 0 010-.21 3.62 3.62 0 013.61-3.4.5.5 0 01.5.5.51.51 0 01-.5.5 2.61 2.61 0 00-2.61 2.61.46.46 0 01-.05.2A3.61 3.61 0 0110.26 17z"
      ></path>
      <path
        fill="#F75D37"
        fillRule="evenodd"
        d="M6.94 1.23c2.69 0 4.87 2.8 4.87 5.49 0 2.48-1.81 5.95-4.21 6.48.033.405-.235.71-.63.71-.358 0-.68-.346-.63-.7-2.41-.49-4.28-4-4.28-6.49 0-2.72 2.19-5.49 4.88-5.49zm-.086 2.624a.5.5 0 10-.708-.708l-2 2a.5.5 0 10.708.708l2-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
