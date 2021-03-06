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
        d="M6.5 7.55c.862 0 1.56-.694 1.56-1.55 0-.856-.698-1.55-1.56-1.55-.862 0-1.56.694-1.56 1.55 0 .856.698 1.55 1.56 1.55zM9 14.62a2.56 2.56 0 10-2.56-2.56A2.55 2.55 0 009 14.62zM13.06 6c0 .856-.699 1.55-1.56 1.55-.862 0-1.56-.694-1.56-1.55 0-.856.698-1.55 1.56-1.55.861 0 1.56.694 1.56 1.55z"
      ></path>
    </svg>
  );
}

export default Icon;
