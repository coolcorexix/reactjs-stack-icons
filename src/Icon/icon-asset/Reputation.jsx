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
        d="M12.106 2.553A1 1 0 0113 2h3.5a1 1 0 110 2h-2.882l-1.724 3.447A1 1 0 0111 8H6.17l-3.245 7.88a1 1 0 11-1.85-.76l3.5-8.5A1 1 0 015.5 6h4.882l1.724-3.447z"
        clipRule="evenodd"
      ></path>
      <g fill="#000" opacity="0.2">
        <path d="M1 3a1 1 0 011-1h6a1 1 0 110 2H2a1 1 0 01-1-1zM1 7a1 1 0 112 0 1 1 0 01-2 0zM15 6a1 1 0 100 2h1a1 1 0 100-2h-1zM7 11a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zM6 14a1 1 0 100 2h10a1 1 0 100-2H6z"></path>
      </g>
    </svg>
  );
}

export default Icon;
