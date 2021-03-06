import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 96 96"
    >
      <path
        fill="#000"
        d="M87.008 27H10.992C9.892 27 9 27.914 9 29.042v12.916C9 43.086 9.892 44 10.992 44h76.016c1.1 0 1.992-.914 1.992-2.042V29.042C89 27.914 88.108 27 87.008 27z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        d="M76 34a2 2 0 100-4 2 2 0 000 4zM76 58a2 2 0 100-4 2 2 0 000 4zM76 81a2 2 0 100-4 2 2 0 000 4z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M17.605 8A3.605 3.605 0 0014 11.605V22H4.5A1.5 1.5 0 003 23.5v16A1.5 1.5 0 004.5 41H14v5.5c0 .175.03.344.085.5H4.5A1.5 1.5 0 003 48.5v16A1.5 1.5 0 004.5 66H14v4H4.5A1.5 1.5 0 003 71.5v16A1.5 1.5 0 004.5 89h80a1.5 1.5 0 001.5-1.5V82h4.395A3.605 3.605 0 0094 78.395v-66.79A3.605 3.605 0 0090.395 8h-72.79zM86 79v-7.5a1.5 1.5 0 00-1.5-1.5H17v-4h67.5a1.5 1.5 0 001.5-1.5v-16a1.5 1.5 0 00-1.5-1.5H16.915c.055-.156.085-.325.085-.5V41h67.5a1.5 1.5 0 001.5-1.5v-16a1.5 1.5 0 00-1.5-1.5H17v-3.085c.156.055.325.085.5.085H91v59.395a.605.605 0 01-.605.605H86zM17.5 16c-.175 0-.344.03-.5.085v-4.48c0-.334.271-.605.605-.605H35v5H17.5zM91 16H38v-5h52.395c.334 0 .605.271.605.605V16zM6 38V25h77v13H6zm0 12h77v13H6V50zm0 36V73h77v13H6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
