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
        fill="#4285F4"
        fillRule="evenodd"
        d="M16.513 7.998H8.98v3.013h4.304c-.185 1-.748 1.476-1.596 2.043v2.006h2.585c1.513-1.392 2.385-3.442 2.385-5.878 0-.567-.05-.66-.145-1.184z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#34A853"
        fillRule="evenodd"
        d="M8.98 16.998c2.16 0 3.97-.716 5.293-1.938l-2.585-2.006c-.716.48-1.632.763-2.708.763-2.083 0-3.846-1.407-4.475-3.297H1.832v2.072a7.995 7.995 0 007.148 4.406z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#FBBC05"
        fillRule="evenodd"
        d="M4.505 10.52c-.16-.48-.251-.993-.251-1.52s.09-1.04.25-1.52V5.408H1.833A7.995 7.995 0 00.982 9c0 1.29.309 2.512.85 3.592l2.673-2.072z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#EA4335"
        fillRule="evenodd"
        d="M8.98 4.183c1.174 0 2.229.403 3.057 1.196l2.294-2.294c-1.385-1.29-3.195-2.083-5.351-2.083a7.995 7.995 0 00-7.148 4.406L4.505 7.48c.629-1.89 2.392-3.297 4.475-3.297z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
