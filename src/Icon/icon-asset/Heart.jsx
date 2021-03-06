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
        fill="#F75D37"
        fillRule="evenodd"
        d="M5.25 2c-1.5 0-2.35.5-3.15 1.36C.5 5 .5 8.2 2.1 10l6 5.871c.2.2.6.2.8 0l6-5.871c1.6-1.8 1.6-5 0-6.64C14.1 2.5 13.25 2 11.75 2 10.204 2 9 3 8.5 3.898 8 3 6.5 2 5.25 2zm8.604 4.854l-2 2a.5.5 0 01-.708-.708l2-2a.5.5 0 01.708.708z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
