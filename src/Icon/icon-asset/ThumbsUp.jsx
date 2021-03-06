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
        fill="#FFC166"
        d="M5 15V9s3.94-5.284 4.203-5.61c.262-.324.64-.453.961-.453.321 0 .601.144.836.363.342.318.484 1.229.44 1.888A3.32 3.32 0 0110.75 7c-.23.31.04.781.49.71 0 0 1.71-.33 2.3-.36.59-.03 2.71-.126 2.71 1.68s-.969 4.525-1.4 5.44c-.431.915-1.19 2.15-2.11 2.38a4.83 4.83 0 01-2.64-.05L5 15z"
      ></path>
      <path
        fill="#07C"
        d="M1 10.5A1.5 1.5 0 012.5 9H4v6H2.5A1.5 1.5 0 011 13.5v-3z"
        opacity="0.7"
      ></path>
      <g fill="#000" opacity="0.4">
        <path d="M11 .5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zM6.146 2.146a.5.5 0 01.708 0l1 1a.5.5 0 11-.708.708l-1-1a.5.5 0 010-.708zM14.854 2.146a.5.5 0 010 .708l-1 1a.5.5 0 01-.708-.708l1-1a.5.5 0 01.708 0z"></path>
      </g>
    </svg>
  );
}

export default Icon;
