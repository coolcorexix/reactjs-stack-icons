import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M12 1a1 1 0 00-1 1v.474L4.048 4.669A1.5 1.5 0 003 6.099v1.802a1.5 1.5 0 001 1.414V10.5a2.5 2.5 0 004.97.385l2.03.641V12a1 1 0 102 0V2a1 1 0 00-1-1zM5 9.632l2.998.946A1.5 1.5 0 015 10.5v-.868z"
        clipRule="evenodd"
      ></path>
      <path fill="#000" d="M1 5.5a.5.5 0 011 0v3a.5.5 0 01-1 0v-3z"></path>
    </svg>
  );
}

export default Icon;
