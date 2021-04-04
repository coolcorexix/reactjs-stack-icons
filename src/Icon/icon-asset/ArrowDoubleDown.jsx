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
        d="M16.01 8.43l-7 7-7-7 1.41-1.41 5.6 5.59L14.6 7l1.41 1.42v.01zm0-5l-7 7-7-7 1.41-1.41 5.6 5.59L14.6 2l1.41 1.42v.01z"
      ></path>
    </svg>
  );
}

export default Icon;
