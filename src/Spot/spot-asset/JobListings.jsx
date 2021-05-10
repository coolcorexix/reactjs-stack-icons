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
      <path
        fill="#000"
        d="M4 15.762c0-.457.358-.762.716-.762h37.568c.358 0 .716.305.716.762v6.476c0 .457-.358.762-.716.762H4.716C4.358 23 4 22.695 4 22.238v-6.476z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        d="M37 18a1 1 0 100-2 1 1 0 000 2zM37 30a1 1 0 100-2 1 1 0 000 2zM37 41a1 1 0 100-2 1 1 0 000 2z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M7 7a2 2 0 012-2h35a2 2 0 012 2v33a2 2 0 01-2 2h-2v2a1 1 0 01-1 1H2a1 1 0 01-1-1v-8a1 1 0 011-1h5v-1H2a1 1 0 01-1-1v-8a1 1 0 011-1h5v-2H2a1 1 0 01-1-1v-8a1 1 0 011-1h5V7zm37 33V11H9v1h32a1 1 0 011 1v8a1 1 0 01-1 1H9v2h32a1 1 0 011 1v8a1 1 0 01-1 1H9v1h32a1 1 0 011 1v4h2zM9 9h8V7H9v2zm10 0h25V7H19v2zM3 14v6h37v-6H3zm0 12v6h37v-6H3zm0 11v6h37v-6H3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
