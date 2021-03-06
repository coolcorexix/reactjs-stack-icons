import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 15 14"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M4 1h7c.875 0 1.651.61 2 1.35L15 8v3a2 2 0 01-2 2H2a2 2 0 01-2-2V8l2-5.65C2.298 1.657 3.153.994 4 1zm6 9l2-2h1l-1.456-4.633c-.157-.352-.52-.68-.95-.68H4.5c-.43 0-.8.312-1 .68L1.96 8.002 3 8l2 2h5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
