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
        fill="#8B41AF"
        fillRule="evenodd"
        d="M2 4a2 2 0 012-2h11a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm2.5 2.5A.5.5 0 005 7h1v5.5a.5.5 0 001 0V7h1a.5.5 0 000-1H5a.5.5 0 00-.5.5zm5.5 0a.5.5 0 00-1 0v6a.5.5 0 001 0v-6zm2.5-.5a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h2a.5.5 0 000-1H13V6.5a.5.5 0 00-.5-.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
