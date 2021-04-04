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
        d="M2 6.382c0 3.524 6.1 11.316 6.1 11.316.221.29.58.289.802-.003 0 0 6.098-7.789 6.098-11.313C15 2.857 12.09 0 8.5 0S2 2.857 2 6.382zm9.25.118a2.75 2.75 0 11-5.5 0 2.75 2.75 0 015.5 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
