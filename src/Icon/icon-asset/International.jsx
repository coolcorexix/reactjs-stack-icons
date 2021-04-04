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
        fillRule="evenodd"
        d="M5.797 11A19.81 19.81 0 015.7 9c0-.693.032-1.364.097-2H3.341A5.99 5.99 0 003 9c0 .701.12 1.374.341 2h2.456zm.134 1H3.803a6.023 6.023 0 002.891 2.54c-.344-.692-.598-1.558-.763-2.54zm6.272-1h2.456A5.99 5.99 0 0015 9a5.99 5.99 0 00-.341-2h-2.456c.065.636.097 1.307.097 2 0 .693-.032 1.364-.097 2zm-.134 1c-.165.982-.42 1.848-.763 2.54A6.023 6.023 0 0014.197 12H12.07zm-4.955-1h3.772c.074-.626.114-1.299.114-2 0-.701-.04-1.374-.114-2H7.114A17.178 17.178 0 007 9c0 .701.04 1.374.114 2zm.154 1c.345 1.793.992 3 1.732 3s1.387-1.207 1.732-3H7.268zM5.93 6c.165-.982.42-1.848.763-2.54A6.023 6.023 0 003.803 6H5.93zm6.138 0h2.128a6.023 6.023 0 00-2.891-2.54c.344.692.598 1.558.763 2.54zM7.268 6h3.464C10.387 4.207 9.74 3 9 3S7.613 4.207 7.268 6zM9 17A8 8 0 119 1a8 8 0 010 16z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
