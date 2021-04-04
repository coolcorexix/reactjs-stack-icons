import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M2 4c-.552 0-1 .522-1 1.167v4.666C1 10.478 1.448 11 2 11h10c.552 0 1-.522 1-1.167V5.167C13 4.522 12.552 4 12 4H2zm2.5 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
