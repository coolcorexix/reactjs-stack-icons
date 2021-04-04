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
        d="M16.01 14.62l-1.4 1.4L9 10.45l-5.59 5.59-1.4-1.41 7-7 7 7v-.01zm0-5l-1.4 1.4L9 5.45l-5.59 5.59-1.4-1.41 7-7 7 7v-.01z"
      ></path>
    </svg>
  );
}

export default Icon;
