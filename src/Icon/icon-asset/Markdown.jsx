import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 21 18"
    >
      <path
        fill="#000"
        d="M21 14a2 2 0 01-2 2H2.001a2 2 0 01-2-2V4a2 2 0 012-2H19a2 2 0 012 2v10zM4.308 13V8.345L6.5 11.23l2.192-2.885V13H11V5H8.692L6.5 7.885 4.308 5H2v8h2.308zM19.5 9H17V5h-1.995v4H12.5l3.5 4.5L19.5 9z"
      ></path>
    </svg>
  );
}

export default Icon;
