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
        d="M8 5.87V2L1 8.633 8 15v-3.696c4.722 0 7.639 1.473 10 4.696-.944-4.604-3.389-9.208-10-10.13z"
      ></path>
    </svg>
  );
}

export default Icon;
