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
      <g fill="#000" opacity="0.4">
        <path d="M3.854 1.146a.5.5 0 10-.708.708l2 2a.5.5 0 10.708-.708l-2-2zM5.5 6h-2a.5.5 0 000 1h2a.5.5 0 000-1zM15.5 7h-2a.5.5 0 010-1h2a.5.5 0 010 1zM15.854 1.854a.5.5 0 00-.708-.708l-2 2a.5.5 0 00.708.708l2-2z"></path>
      </g>
      <path
        fill="#FFC166"
        d="M8.212 16.487A2.23 2.23 0 016.61 17H5v-6h2l1-7.63c0-.2.23-.37.5-.37s.5.17.5.37V15a2.23 2.23 0 01-.788 1.487zM10.788 16.487A2.23 2.23 0 0012.39 17H14v-6h-2l-1-7.63c0-.2-.23-.37-.5-.37s-.5.17-.5.37V15a2.23 2.23 0 00.788 1.487z"
      ></path>
      <g fill="#07C" opacity="0.7">
        <path d="M2.5 11A1.5 1.5 0 001 12.5v3A1.5 1.5 0 002.5 17H4v-6H2.5zM16.5 11H15v6h1.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5z"></path>
      </g>
    </svg>
  );
}

export default Icon;
