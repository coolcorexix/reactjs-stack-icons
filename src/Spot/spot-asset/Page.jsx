import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <g fill="#000" opacity="0.2">
        <path d="M41 27.155c0 .507-.317.845-.793.845H10.793c-.476 0-.793-.338-.793-.845v-4.31c0-.422.317-.845.793-.845h29.414c.476 0 .793.422.793.845v4.31zM47 14.155c0 .423-.39.845-.78.845H4.78c-.468 0-.78-.422-.78-.845v-4.31C4 9.423 4.312 9 4.78 9h41.362c.39 0 .78.423.78.845v4.31H47z"></path>
      </g>
      <path
        fill="#000"
        d="M7 10a1 1 0 11-2 0 1 1 0 012 0zM9 11a1 1 0 100-2 1 1 0 000 2z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M8 19a1 1 0 00-1 1v6a1 1 0 001 1h31a1 1 0 001-1v-6a1 1 0 00-1-1H8zm25 2v4H9v-4h24zm2 4v-4h3v4h-3z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M8 29a1 1 0 100 2h20a1 1 0 100-2H8zM8 33.001a1 1 0 100 2h13a1 1 0 100-2H8z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M1 40V8a2 2 0 012-2h41a2 2 0 012 2v32a2 2 0 01-2 2H3a2 2 0 01-2-2zm2-28h41V8H3v4zm41 2H3v26h41V14z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
