import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="#000"
        d="M28.267 25.484A9.073 9.073 0 0024.872 8a9.07 9.07 0 00-3.544 17.422C11 26.812 11 35.526 11 45.776h28.011c0-10.385 0-18.747-10.744-20.292z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M12.008 14.07c0-5.518 4.474-9.992 9.992-9.992 5.519 0 9.992 4.474 9.992 9.992a9.99 9.99 0 01-5.297 8.823c2.577.54 4.564 1.518 6.075 2.907 2.316 2.132 3.347 5.084 3.822 8.391a1 1 0 11-1.98.285c-.445-3.102-1.367-5.52-3.197-7.204-1.825-1.68-4.717-2.775-9.428-2.864-3.398-.065-5.842.463-7.616 1.388-1.753.914-2.92 2.252-3.714 3.951-.805 1.724-1.228 3.83-1.442 6.257-.189 2.14-.212 4.472-.215 6.946h18.36a1 1 0 110 2H7v-1.028c0-2.816 0-5.571.223-8.094.223-2.53.675-4.9 1.622-6.927.957-2.05 2.415-3.738 4.601-4.878 1.06-.553 2.274-.968 3.66-1.24a9.99 9.99 0 01-5.098-8.713zM22 6.063a8.008 8.008 0 100 16.015 8.008 8.008 0 000-16.015z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M37 39a1 1 0 10-2 0v3h-3a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3v-3z"
      ></path>
    </svg>
  );
}

export default Icon;