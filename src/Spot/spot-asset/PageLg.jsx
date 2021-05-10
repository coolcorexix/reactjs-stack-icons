import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 96 96"
    >
      <g fill="#000" opacity="0.2">
        <path d="M9 16a2 2 0 00-2 2v9a2 2 0 002 2h84a2 2 0 002-2v-9a2 2 0 00-2-2H9zM21 43a2 2 0 00-2 2v9a2 2 0 002 2h60a2 2 0 002-2v-9a2 2 0 00-2-2H21z"></path>
      </g>
      <path
        fill="#000"
        d="M19 18.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM10.5 20a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M14 39.5a1.5 1.5 0 011.5-1.5h63a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5h-63a1.5 1.5 0 01-1.5-1.5v-12zM67 41H17v9h50.085a1.497 1.497 0 01-.085-.5V41zm2.915 9H77v-9h-7v8.5c0 .175-.03.344-.085.5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M14 60.5a1.5 1.5 0 011.5-1.5h41a1.5 1.5 0 010 3h-41a1.5 1.5 0 01-1.5-1.5zM15.5 67a1.5 1.5 0 000 3h26a1.5 1.5 0 000-3h-26z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M2 14.588A3.588 3.588 0 015.588 11h82.824A3.588 3.588 0 0192 14.588v65.824A3.588 3.588 0 0188.412 84H5.588A3.588 3.588 0 012 80.412V14.588zm3 0V23h84v-8.412a.588.588 0 00-.588-.588H5.588a.588.588 0 00-.588.588zM89 26H5v54.412c0 .325.263.588.588.588h82.824a.588.588 0 00.588-.588V26z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
