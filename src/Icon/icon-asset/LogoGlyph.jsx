import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 25 30"
    >
      <path fill="#BCBBBB" d="M21 27v-8h3v11H0V19h3v8h18z"></path>
      <path
        fill="#F48024"
        fillRule="evenodd"
        d="M17.1.2L15 1.8l7.9 10.6 2.1-1.6L17.1.2zm3.7 14.7L10.6 6.4l1.7-2 10.2 8.5-1.7 2zM7.2 12.3l12 5.6 1.1-2.4-12-5.6-1.1 2.4zm-1.798 6.801l13.561 1.96.164-2.38-13.256-2.547-.469 2.967zM19 25H5v-3h14v3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
