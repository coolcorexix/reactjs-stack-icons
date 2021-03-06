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
        fill="#5158CC"
        d="M15.25 6.25a2 2 0 100-4 2 2 0 000 4zM17.2 7H13v5.5a2.5 2.5 0 005 0V7.8a.8.8 0 00-.8-.8z"
      ></path>
      <path
        fill="#7B82EA"
        d="M12 3.5a2.5 2.5 0 01-2 2.45V5a2 2 0 00-2-2h-.95a2.5 2.5 0 014.95.5zM9.5 17a4.502 4.502 0 01-4.244-3H8a2 2 0 002-2V7h3a1 1 0 011 1v4.5A4.5 4.5 0 019.5 17z"
      ></path>
      <path
        fill="#4D54BC"
        fillRule="evenodd"
        d="M1 4a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V5a1 1 0 00-1-1H1zm1 2h5v1H5v4H4V7H2V6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
