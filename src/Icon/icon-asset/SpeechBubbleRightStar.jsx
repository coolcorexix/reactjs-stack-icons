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
        d="M17 17l-3-3H3a2 2 0 01-2-2V3a2 2 0 012-2h12a2 2 0 012 2v14zM9.395 2.409a.4.4 0 00-.743 0L7.54 5.18a.4.4 0 01-.344.25l-2.98.202a.4.4 0 00-.23.706l2.292 1.916a.4.4 0 01.132.404l-.729 2.897a.4.4 0 00.6.437l2.53-1.589a.4.4 0 01.426 0l2.53 1.589a.4.4 0 00.6-.437l-.728-2.897a.4.4 0 01.131-.404l2.293-1.916a.4.4 0 00-.23-.706l-2.98-.202a.4.4 0 01-.344-.25L9.395 2.409z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
