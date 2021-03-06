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
        d="M17.86 6.665l-1.768 1.767c-3.905-3.905-10.237-3.905-14.142 0L.182 6.665c4.882-4.882 12.796-4.882 17.678 0zM14.324 10.2l-1.768 1.768a5 5 0 00-7.07 0L3.717 10.2a7.5 7.5 0 0110.606 0zm-3.535 3.536L9.02 15.504l-1.768-1.768a2.5 2.5 0 013.536 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
