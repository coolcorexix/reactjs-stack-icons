import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 49"
    >
      <path
        fill="#000"
        d="M35 39H12c-2.723 0-5-2.277-5-5V9.307C7 6.557 8.125 5 10.875 5H40c2.723 0 5 2.277 5 5v38.5L35 39zm-.332-7l-8.654-21.202h-4.48L13.457 32h5.09l1.625-4.475H28.9L30.625 32h4.043z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M36.288 35H8c-.152 0-.431-.064-.857-.329-.416-.259-.846-.631-1.264-1.05A3 3 0 015 31.5V6c0-1.645 1.355-3 3-3h30a3 3 0 013 3v33.398L36.288 35zM43 6a5 5 0 00-5-5H8C5.25 1 3 3.25 3 6v25.5a5 5 0 001.464 3.535C5.402 35.974 6.674 37 8 37h27.5l7.5 7V6zm-7.11 25L26.41 7h-6.936l-9.18 24h8.508l1.625-4.475h5.1L27.253 31h8.637zm-16.865-6.475L17.4 29h-4.2l7.65-20h4.2l7.9 20h-4.325L26.9 24.525h-7.875zm6.6-3.325L22.9 13.9l-2.65 7.3h5.375z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
