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
        d="M3 2a2 2 0 012-2h11a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V2zm7.059 2.91l-1.41-1.27L4.797 7.5l3.969 3.953 1.293-1.363-2.59-2.59 2.59-2.59zm2.175-1.238L10.957 4.91l2.59 2.59-2.59 2.59 1.277 1.27 3.86-3.86-3.86-3.828z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M2 3a2 2 0 00-2 2v10a3 3 0 003 3h10a2 2 0 002-2H4a2 2 0 01-2-2V3z"
        opacity="0.4"
      ></path>
    </svg>
  );
}

export default Icon;
