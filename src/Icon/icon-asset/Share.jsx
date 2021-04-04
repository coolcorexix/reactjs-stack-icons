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
        d="M2.994 1H8v2H3v12h12v-5h2v5.006A1.995 1.995 0 0115.006 17H2.994A1.995 1.995 0 011 15.006V2.994C1 1.893 1.895 1 2.994 1z"
      ></path>
      <path fill="#000" d="M17 1h-7v2h3.5L6 10.5 7.5 12 15 4.5V8h2V1z"></path>
    </svg>
  );
}

export default Icon;
