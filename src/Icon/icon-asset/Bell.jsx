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
        d="M16 13v1H2v-1l.73-.58c.77-.77.81-3.55 1.19-5.42C4.69 3.23 8 2 8 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 4.66 1.19 5.42l.66.58H16zm-7 4c1.11 0 2-.89 2-2H7c0 1.11.89 2 2 2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
