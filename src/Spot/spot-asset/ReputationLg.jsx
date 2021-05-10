import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 96 96"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M70.671 13.19A2 2 0 0172.5 12H85a2 2 0 110 4H73.802L63.257 39.81A2 2 0 0161.43 41H45.528L39.65 52.886A2 2 0 0137.857 54H23.778L11.815 79.84a2 2 0 11-3.63-1.68l12.5-27A2 2 0 0122.5 50h14.115l5.878-11.886A2 2 0 0144.286 37h15.84l10.545-23.81z"
        clipRule="evenodd"
      ></path>
      <g fill="#000" opacity="0.2">
        <path d="M75.67 20.195A2 2 0 0177.5 19h6a2 2 0 110 4h-4.695L68.331 46.806A2 2 0 0166.5 48H50.325l-4.983 11.78A2 2 0 0143.5 61H28.277l-8.962 19.34a2 2 0 11-3.63-1.68l9.5-20.5A2 2 0 0127 57h15.175l4.983-11.78A2 2 0 0149 44h16.195l10.474-23.805zM56 25a2 2 0 01-2 2H13a2 2 0 110-4h41a2 2 0 012 2zM33 37a2 2 0 100-4H13a2 2 0 100 4h20z"></path>
        <path d="M35 69a2 2 0 012-2h44a2 2 0 110 4H37a2 2 0 01-2-2zM58 57a2 2 0 100 4h23a2 2 0 100-4H58zM73 49a2 2 0 012-2h6a2 2 0 110 4h-6a2 2 0 01-2-2zM13 43a2 2 0 100 4h6a2 2 0 100-4h-6z"></path>
      </g>
    </svg>
  );
}

export default Icon;
