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
        d="M15.57 9.86L17 8.43 15.57 7 12 10.57 7.43 6 11 2.43 9.57 1 8.14 2.43 6.71 1 4.57 3.14 3.14 1.71 1.71 3.14l1.43 1.43L1 6.71l1.43 1.43L1 9.57 2.43 11 6 7.43 10.57 12 7 15.57 8.43 17l1.43-1.43L11.29 17l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L17 11.29l-1.43-1.43z"
      ></path>
    </svg>
  );
}

export default Icon;
