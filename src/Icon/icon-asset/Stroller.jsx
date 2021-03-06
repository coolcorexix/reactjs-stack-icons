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
        d="M10 1a5.99 5.99 0 00-2 .341V6h7.917A6.002 6.002 0 0010 1z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M16 7H6L5 5H1v2h3c0 1.119.306 2.166.84 3.062A3.501 3.501 0 109 13.5a3.5 3.5 0 105.677-2.74A5.975 5.975 0 0016 7zm-7 6.5c0-.202-.017-.4-.05-.591l.097.016c-.03.187-.047.38-.047.575zm-2 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
