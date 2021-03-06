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
        d="M5.024 9.443l-2.22 2.188C1.633 10.264 1 9 1 9s3-6 8.06-6c.753 0 1.46.14 2.12.376L9.5 5.03a4.012 4.012 0 00-4.476 4.412zm2.024 3.05A3.986 3.986 0 009 13c2.22 0 4-1.78 4-4 0-.728-.195-1.413-.536-2.002l-1.517 1.539c.035.148.053.303.053.463 0 1.11-.89 2-2 2a2.03 2.03 0 01-.435-.047l-1.517 1.54zm7.116-7.22A14.792 14.792 0 0117 9s-3 6-7.94 6c-1.31 0-2.482-.402-3.5-.999L3.59 16 2 14.41 14.59 2 16 3.41l-1.836 1.862z"
      ></path>
    </svg>
  );
}

export default Icon;
