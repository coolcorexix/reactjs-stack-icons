import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 32 37"
    >
      <path fill="#BCBBBB" d="M26 33v-9h4v13H0V24h4v9h22z"></path>
      <path
        fill="#F48024"
        fillRule="evenodd"
        d="M21.5 0l-2.7 2 9.9 13.3 2.7-2L21.5 0zM26 18.4L13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5zM9.1 15.2l15 7 1.4-3-15-7-1.4 3zm13.99 10.79l.694-2.949L7.68 19.687 7 23l16.09 2.99zM23 30H7v-3h16v3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
