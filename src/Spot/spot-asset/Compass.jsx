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
      <path fill="#000" d="M21 26.5V38l10-7V19.5l-10 7z" opacity="0.2"></path>
      <path
        fill="#000"
        d="M23 15.124a1 1 0 102 0v-3a1 1 0 10-2 0v3zM12.974 28a1 1 0 100-2h-2.99a1 1 0 100 2h2.99zM38 28a1 1 0 100-2h-2.99a1 1 0 000 2H38zM23.938 43a1 1 0 01-1-1v-3a1 1 0 112 0v3a1 1 0 01-1 1zM33.24 36.654a1 1 0 001.414-1.414l-.707-.707a1 1 0 10-1.414 1.414l.707.707zM15.293 19.707L14.586 19A1 1 0 0116 17.586l.707.707a1 1 0 01-1.414 1.414zM13.346 36.24a1 1 0 001.414 1.414l.707-.707a1 1 0 10-1.414-1.414l-.707.707zM32.293 19.414a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM24 29c1.105 0 2-.895 2.002-2a2.001 2.001 0 00-4 0c-.001 1.105.894 2 1.998 2z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M30 18a1 1 0 00-1.6-.8l-10 7.5a1 1 0 00-.4.8V36a1 1 0 001.545.838l10-6.5A1 1 0 0030 29.5V18zM20 34.157V26l8-6v8.957l-8 5.2z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M26.482 8.036a3.956 3.956 0 001.464-3.078A3.952 3.952 0 0024 1a3.952 3.952 0 00-3.945 3.958c0 1.243.571 2.352 1.464 3.078C12.198 9.256 5 17.253 5 26.937 5 37.465 13.507 46 24 46s19-8.535 19-19.063c0-9.684-7.197-17.681-16.518-18.9zm-.536-3.078A1.952 1.952 0 0124 6.917a1.952 1.952 0 01-1.945-1.959C22.055 3.871 22.932 3 24 3c1.069 0 1.946.87 1.946 1.958zM24 44c-9.383 0-17-7.633-17-17.063 0-9.429 7.617-17.062 17-17.062s17 7.633 17 17.063S33.383 44 24 44z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
