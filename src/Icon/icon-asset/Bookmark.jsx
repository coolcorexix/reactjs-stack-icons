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
        d="M6 1a2 2 0 00-2 2v14l5-4 5 4V3a2 2 0 00-2-2H6zm3.898 3.826h2.906l-2.35 1.709.897 2.764L9 7.59 6.649 9.3l.898-2.764-2.351-1.709h2.906L9 2.063l.898 2.763z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
