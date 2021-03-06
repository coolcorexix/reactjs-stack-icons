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
        fill="#5FBA7D"
        d="M13.92 3H4c.067-.6.618-1.052 1.22-1h7.48c.602-.052 1.153.4 1.22 1zM14.49 4c.602-.052 1.153.4 1.22 1H2.29a1.141 1.141 0 011.2-1h11zM1 7h16a1.141 1.141 0 00-1.22-1H2.22A1.141 1.141 0 001 7z"
      ></path>
      <path
        fill="#5FBA7D"
        fillRule="evenodd"
        d="M2.5 8A1.5 1.5 0 001 9.5v5A1.5 1.5 0 002.5 16h13a1.5 1.5 0 001.5-1.5v-5A1.5 1.5 0 0015.5 8h-13zM5 15a3 3 0 110-6h8a3 3 0 110 6H5z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#1A1104"
        d="M9 13.9a1.9 1.9 0 100-3.8 1.9 1.9 0 000 3.8z"
      ></path>
    </svg>
  );
}

export default Icon;
