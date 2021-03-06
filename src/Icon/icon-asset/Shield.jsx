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
        d="M2 4l7-3 7 3v5.02C16 13.69 10.69 17 9 17c-1.69 0-7-3.31-7-7.98V4zm6.14 5.2L7 12h4L9.86 9.2c-.05-.23.06-.46.25-.59.56-.36.89-.95.89-1.61 0-1.09-.94-2-2.02-2C7.89 5 7 5.91 7 7c0 .66.33 1.25.89 1.61.197.126.296.36.25.59z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
