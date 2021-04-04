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
        d="M1 9.5C1 6.5 3.5 4 6.5 4H13c2.2 0 4 1.8 4 4s-1.8 4-4 4H7.5C6.1 12 5 10.9 5 9.5S6.1 7 7.5 7H12v2H7.4c-.5 0-.5 1 0 1H13c1.1 0 2-.9 2-2s-.9-2-2-2H6.5C4.6 6 3 7.6 3 9.5S4.6 13 6.5 13H12v2H6.5C3.5 15 1 12.5 1 9.5z"
      ></path>
    </svg>
  );
}

export default Icon;
