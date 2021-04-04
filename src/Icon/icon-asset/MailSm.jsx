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
        d="M7 8.744L1 5.14v5.43C1 11.38 1.714 12 2.5 12h9c.786 0 1.5-.621 1.5-1.429v-5.43L7 8.744z"
      ></path>
      <path
        fill="#000"
        d="M7 7l6-3.571C13 2.62 12.286 2 11.5 2h-9C1.675 2 1 2.643 1 3.429L7 7z"
      ></path>
    </svg>
  );
}

export default Icon;
