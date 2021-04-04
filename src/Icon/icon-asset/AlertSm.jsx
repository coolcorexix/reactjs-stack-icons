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
        d="M5.97 1.7c.57-.94 1.5-.93 2.05 0l5.73 9.59c.57.94.12 1.71-.98 1.71H1.22c-1.1 0-1.54-.77-.97-1.71L5.97 1.7zM6 4v5h2V4H6zm0 6v2h2v-2H6z"
      ></path>
    </svg>
  );
}

export default Icon;
