import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#000"
        d="M12.5 5H9V1H5v4H1.5L7 10.5 12.5 5zM1 11v2h12v-2H1z"
      ></path>
    </svg>
  );
}

export default Icon;
