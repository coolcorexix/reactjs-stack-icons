import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <g fill="#000" opacity="0.2">
        <path d="M47 38.282c0 .359-.273.718-.682.718H32.682c-.341 0-.682-.36-.682-.718V26.718c0-.359.34-.718.682-.718h13.636c.41 0 .682.36.682.718v11.564zM4 14.762c0-.457.349-.762.697-.762h36.606c.348 0 .697.305.697.762v6.476c0 .457-.349.762-.697.762H4.697C4.35 22 4 21.695 4 21.238v-6.476z"></path>
      </g>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M29 24a1 1 0 011-1h15a1 1 0 011 1v13a1 1 0 01-1 1H30a1 1 0 01-1-1V24zm2 1v11h13V25H31zM8 4a2 2 0 00-2 2v3a1 1 0 001 1h35v10.187a1 1 0 102 0V6a2 2 0 00-2-2H8zm7 4H8V6h7v2zm27 0H17V6h25v2z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M8 24a1 1 0 10-2 0v18a2 2 0 002 2h34a2 2 0 002-2v-1a1 1 0 10-2 0v1H8V24z"
      ></path>
      <path
        fill="#000"
        d="M18 33a1 1 0 100 2h8a1 1 0 100-2h-8zM10 34a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zM11 29a1 1 0 100 2h15a1 1 0 100-2H11z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M10 24a1 1 0 011-1h15a1 1 0 011 1v3a1 1 0 01-1 1H11a1 1 0 01-1-1v-3zm2 1v1h13v-1H12zM2 11a1 1 0 00-1 1v8a1 1 0 001 1h38a1 1 0 001-1v-8a1 1 0 00-1-1H2zm1 8v-6h36v6H3z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M37 16a1 1 0 11-2 0 1 1 0 012 0zM42 29a1 1 0 11-2 0 1 1 0 012 0zM42 33a1 1 0 11-2 0 1 1 0 012 0zM38 33a1 1 0 11-2 0 1 1 0 012 0z"
      ></path>
    </svg>
  );
}

export default Icon;
