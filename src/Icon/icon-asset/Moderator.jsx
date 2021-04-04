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
        d="M8.391.783c.336-.432.883-.43 1.218 0l5.782 7.434c.336.432.335 1.136 0 1.566l-5.782 7.434c-.336.432-.883.43-1.218 0L2.609 9.783c-.336-.432-.335-1.136 0-1.566L8.391.783z"
      ></path>
    </svg>
  );
}

export default Icon;
