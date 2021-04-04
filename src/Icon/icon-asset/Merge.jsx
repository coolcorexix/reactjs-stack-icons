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
        d="M5.445 3H1v2h3.555l3.6 4-3.6 4H1v2h4.445l4.5-5H13v3l4-4-4-4v3H9.945l-4.5-5z"
      ></path>
    </svg>
  );
}

export default Icon;
