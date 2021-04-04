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
        d="M5 7H1V5h4V1h2v4a2 2 0 01-2 2zM17 5v2h-4a2 2 0 01-2-2V1h2v4h4zM5 17h2v-4a2 2 0 00-2-2H1v2h4v4zM13 17h-2v-4a2 2 0 012-2h4v2h-4v4z"
      ></path>
    </svg>
  );
}

export default Icon;
