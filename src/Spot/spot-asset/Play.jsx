import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="#000"
        d="M20 37.235V19.717a1 1 0 011.494-.87l15.015 8.523a1 1 0 01.02 1.727l-15.015 8.996A1 1 0 0120 37.235z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M18.962 14.92c-1.34-.72-2.962.25-2.962 1.77v17.575c0 1.54 1.662 2.509 3.002 1.748l15.902-9.025c1.375-.78 1.352-2.77-.04-3.518l-15.902-8.55zM18 16.69v-.006l.005-.003a.032.032 0 01.005-.003l.005.003 15.901 8.55.005.003v.012l-.004.003-15.902 9.025-.005.002s-.003 0-.005-.002L18 34.27V16.69z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M23.5 2C11.074 2 1 12.074 1 24.5S11.074 47 23.5 47 46 36.926 46 24.5 35.926 2 23.5 2zM3 24.5C3 13.178 12.178 4 23.5 4S44 13.178 44 24.5 34.822 45 23.5 45 3 35.822 3 24.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
