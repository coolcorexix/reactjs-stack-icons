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
        fill="#000"
        fillRule="evenodd"
        d="M6.787 12.666l3.535 3.535a6.003 6.003 0 001.173-6.83l2.034-2.034a3.998 3.998 0 003.864-1.035c.245-.245.44-.512.607-.797L12.533.027A4.005 4.005 0 0010.7 4.509L8.667 6.543a6.003 6.003 0 00-6.83 1.173l3.536 3.535-3.182 3.182-1.768 3.182 3.182-1.767 3.182-3.182z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
