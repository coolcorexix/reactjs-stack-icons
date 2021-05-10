import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#000"
        d="M13 36a1 1 0 01-1-1V11.731l-6.693 2.16A1 1 0 014 12.939V9.407a1 1 0 01.663-.941l12-4.3A1 1 0 0118 5.109V35a1 1 0 01-1 1h-4zm12.842-3.333c0-2.009 1.616-3.376 3.57-3.376 1.948 0 3.588 1.365 3.588 3.376C33 34.693 31.36 36 29.412 36c-1.94 0-3.57-1.32-3.57-3.333z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M14.863 1.058A1 1 0 0115.198 1H16a1 1 0 011 1v32.085a1 1 0 01-1 1h-6a1 1 0 01-1-1V11.544L2.316 13.77A1 1 0 011 12.823v-6.12a1 1 0 01.664-.942l13.199-4.703zM15 3.132L3 7.408v4.027l6.684-2.227a1 1 0 011.316.948v22.93h4V3.131zm12.412 25.159c-1.488 0-2.57 1.002-2.57 2.376 0 1.358 1.075 2.333 2.57 2.333C28.924 33 30 32.032 30 30.667c0-1.369-1.098-2.376-2.588-2.376zm-4.57 2.376c0-2.643 2.15-4.376 4.57-4.376 2.405 0 4.588 1.723 4.588 4.376C32 33.354 29.797 35 27.412 35c-2.386 0-4.57-1.667-4.57-4.333z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
