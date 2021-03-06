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
      <circle cx="9" cy="9" r="8" fill="#FFAA3B" opacity="0.4"></circle>
      <path
        fill="#FF9700"
        d="M8.41 17a10 10 0 01.38-15.75c.1-.075.194-.159.28-.25a8 8 0 00-5.73 13.66A7.93 7.93 0 008.41 17z"
        opacity="0.3"
      ></path>
      <path
        fill="#1A1104"
        d="M6.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12.546 11.052A6.56 6.56 0 009 10a6.56 6.56 0 00-3.545 1.052c-.351.236-.53.726-.422 1.16.145.59.82.988 1.374.629a4.777 4.777 0 012.56-.752c.9 0 1.783.259 2.561.752.447.304 1.061.129 1.327-.338.269-.473.147-1.14-.309-1.45zM13 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      ></path>
    </svg>
  );
}

export default Icon;
