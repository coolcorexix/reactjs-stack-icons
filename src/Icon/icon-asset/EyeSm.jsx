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
        d="M7.053 1C2.625 1 0 6.5 0 6.5S2.625 12 7.053 12C11.375 12 14 6.5 14 6.5S11.375 1 7.053 1zM7 10.167c-1.925 0-3.5-1.632-3.5-3.667 0-2.017 1.575-3.667 3.5-3.667 1.943 0 3.5 1.65 3.5 3.667 0 2.035-1.557 3.667-3.5 3.667zm0-1.834c.971 0 1.75-.816 1.75-1.833 0-1.018-.779-1.833-1.75-1.833S5.25 5.483 5.25 6.5c0 1.018.779 1.833 1.75 1.833z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
