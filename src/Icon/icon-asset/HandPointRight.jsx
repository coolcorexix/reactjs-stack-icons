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
        fill="#FFC166"
        d="M6 7s1.688-.672 2.25-.86C8.813 5.954 10.998 5 12.5 5h3c.755 0 1.5.5 1.5 1.5S16.25 8 15.5 8h-3.28c.477.87.694 1.89.625 2.879a5.17 5.17 0 01-1.015 2.732c-.89 1.1-3.46.942-4.127.826C7.037 14.322 6.665 14.19 6 14V7z"
      ></path>
      <g fill="#000" opacity="0.4">
        <path d="M16.146 1.146a.5.5 0 01.708.708l-1 1a.5.5 0 01-.708-.708l1-1zM15.146 10.854a.5.5 0 01.708-.708l1 1a.5.5 0 01-.708.708l-1-1zM9.854 1.146a.5.5 0 10-.708.708l1 1a.5.5 0 00.708-.708l-1-1z"></path>
      </g>
      <path
        fill="#07C"
        d="M2 8.5A1.5 1.5 0 013.5 7H5v7H3.5A1.5 1.5 0 012 12.5v-4z"
        opacity="0.7"
      ></path>
    </svg>
  );
}

export default Icon;
