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
        fillRule="evenodd"
        d="M26.5 47C37.822 47 47 37.822 47 26.5S37.822 6 26.5 6 6 15.178 6 26.5 15.178 47 26.5 47zm-9.379-23.121l3.967 3.966 9.45-13.56a3 3 0 014.923 3.43l-11.5 16.5a3 3 0 01-4.582.406l-6.5-6.5a3 3 0 114.242-4.242z"
        clipRule="evenodd"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M23.5 4C12.73 4 4 12.73 4 23.5S12.73 43 23.5 43 43 34.27 43 23.5 34.27 4 23.5 4zM2 23.5C2 11.626 11.626 2 23.5 2S45 11.626 45 23.5 35.374 45 23.5 45 2 35.374 2 23.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M14.293 26.707a1 1 0 011.414-1.414l5.655 5.655 10.818-15.52a1 1 0 111.64 1.144l-11.5 16.5a1 1 0 01-1.527.135l-6.5-6.5zm6.795 1.138L17.12 23.88a3 3 0 10-4.242 4.242l6.5 6.5a3 3 0 004.582-.406l11.5-16.5a3 3 0 10-4.922-3.43l-9.451 13.56z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
