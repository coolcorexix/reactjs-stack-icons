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
        d="M16.83 45h.67l25.22-25.565a3 3 0 000-4.243l-5.072-5.07a3 3 0 00-4.242 0L17 26.526V44c0 .35-.06.687-.17 1z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M9 43a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M14 1H4a3 3 0 00-3 3v40a3 3 0 003 3h40a3 3 0 003-3V34a3 3 0 00-3-3H28.154L40.72 18.435a3 3 0 000-4.243l-7.07-7.07a3 3 0 00-4.244 0L17 19.526V4a3 3 0 00-3-3zm30 44H16.83c.11-.313.17-.65.17-1v-1.846L26.154 33H44a1 1 0 011 1v10a1 1 0 01-1 1zm-4.695-27.98L17 39.327v-16.97l13.82-13.82a1 1 0 011.414 0l7.071 7.07a1 1 0 010 1.415zM3 4a1 1 0 011-1h10a1 1 0 011 1v40a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
