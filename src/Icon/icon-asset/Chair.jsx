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
        fillRule="evenodd"
        d="M10 8h2.867c.663 0 1.17-.471 1.13-1.043l-.311-5.048C13.608 1.404 13.14 1 12.516 1h-7.07c-.586 0-1.093.404-1.132.909l-.312 5.048C3.963 7.529 4.47 8 5.133 8H8v1H4.561C3.714 9 3 9.457 3 10c0 .543.714 1 1.561 1H8v2.102a5.353 5.353 0 00-2.651 1.408l-.002.002a1 1 0 101.034.514 4.672 4.672 0 015.234.008 1 1 0 101.05-.52l-.003-.004A5.262 5.262 0 0010 13.096V11h3.439c.847 0 1.561-.429 1.561-1 0-.543-.714-1-1.561-1H10V8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
