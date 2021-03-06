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
        d="M7.223 11.831c.489.36 1.032.646 1.614.845l.616-1.798a4.1 4.1 0 114.04-.803l1.256 1.426a5.997 5.997 0 001.41-7.161 6 6 0 10-8.936 7.491z"
      ></path>
      <path
        fill="#000"
        d="M10.646 6.235A5.999 5.999 0 009.05 5.36l-.65 1.786a4.1 4.1 0 11-4.053.729l-1.23-1.449a6 6 0 107.53-.192z"
      ></path>
    </svg>
  );
}

export default Icon;
