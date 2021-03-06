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
      <g fill="#AFAFAF" opacity="0.4">
        <path d="M11 6V1.08a17.054 17.054 0 00-4 0V6a14.11 14.11 0 014 0zM1.08 7H6a14.11 14.11 0 000 4H1.08a17.054 17.054 0 010-4zM16.92 7H12c.19 1.327.19 2.673 0 4h4.92c.162-1.338.16-2.67 0-4zM7 16.92V12c1.327.19 2.673.19 4 0v4.92c-1.338.162-2.7.16-4 0z"></path>
      </g>
      <path
        fill="#F75D37"
        d="M7 5.51a4.31 4.31 0 00-.85.64 4.31 4.31 0 00-.64.85H1.26A7.997 7.997 0 017 1.26v4.25zM12.45 7A3.843 3.843 0 0011 5.55V1.26A7.997 7.997 0 0116.74 7h-4.29zM12.45 11A3.843 3.843 0 0111 12.45v4.29A7.997 7.997 0 0016.74 11h-4.29zM5.55 11A3.843 3.843 0 007 12.45v4.29A7.997 7.997 0 011.26 11h4.29z"
      ></path>
    </svg>
  );
}

export default Icon;
