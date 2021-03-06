import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 9 10"
    >
      <path
        fill="#fff"
        d="M0 1.84L4.5 0 9 1.84v3.17C9 7.528 6.304 10 4.5 10 2.696 10 0 7.528 0 5.01V1.84z"
      ></path>
      <path
        fill="#6A7E7C"
        fillRule="evenodd"
        d="M1 2.5L4.5 1 8 2.5v2.51C8 7.345 5.345 9 4.5 9 3.655 9 1 7.345 1 5.01V2.5zm2.982 3.025L3.2 7l2.6-.004-.782-1.471a.392.392 0 01.15-.387c.338-.236.73-.702.73-1.135 0-.715-.494-1.233-1.41-1.233-.916 0-1.384.518-1.384 1.233 0 .433.39.899.727 1.135a.387.387 0 01.15.387z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
