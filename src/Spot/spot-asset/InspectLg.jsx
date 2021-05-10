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
      <circle cx="67" cy="72" r="12" fill="#000" opacity="0.2"></circle>
      <path
        fill="#000"
        d="M9.5 2A3.5 3.5 0 006 5.5v72A3.5 3.5 0 009.5 81H47a1.5 1.5 0 000-3H9.5a.5.5 0 01-.5-.5v-72a.5.5 0 01.5-.5h58.047a.5.5 0 01.5.5v46.543a1.5 1.5 0 103 0V5.5a3.5 3.5 0 00-3.5-3.5H9.5z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M71.514 79.824A12.95 12.95 0 0163 83c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13c0 2.841-.912 5.47-2.458 7.609l13.519 13.518a1.5 1.5 0 01-2.122 2.122L71.515 79.824zM73 70c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M16 17a1.5 1.5 0 000 3h43a1.5 1.5 0 000-3H16zM14.5 31.5A1.5 1.5 0 0116 30h43a1.5 1.5 0 010 3H16a1.5 1.5 0 01-1.5-1.5zM16 42a1.5 1.5 0 000 3h43a1.5 1.5 0 000-3H16zM14.5 55.5A1.5 1.5 0 0116 54h26a1.5 1.5 0 010 3H16a1.5 1.5 0 01-1.5-1.5z"
      ></path>
    </svg>
  );
}

export default Icon;
