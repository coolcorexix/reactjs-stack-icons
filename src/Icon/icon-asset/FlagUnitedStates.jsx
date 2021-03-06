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
      <rect
        width={props.width}
        height={props.height}
        x="1"
        y="3"
        fill="#FEFEFE"
        rx="2"
      ></rect>
      <path fill="#0B327C" d="M1 5a2 2 0 012-2h6v5H1V5z"></path>
      <path
        fill="red"
        d="M17 5.002V5H9v1h8v-.998zM14.99 3H9v1h7.732A2 2 0 0015 3h-.01zM17 7H9v1h8V7zM17 9v1H1V9h16zM17 11v1H1v-1h16zM16.733 14a1.99 1.99 0 00.267-.988V13H1c0 .364.097.706.268 1h15.465z"
      ></path>
    </svg>
  );
}

export default Icon;
