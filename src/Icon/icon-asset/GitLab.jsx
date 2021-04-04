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
        fill="#E65328"
        fillRule="evenodd"
        d="M17 10l-1-3-2-6c.21-.071-.188-.071 0 0l-2 6H6L4 1c.188-.071-.21-.071 0 0L2 7l-1 3c-.052-.169.038.112 0 0l8 6 8-6c-.038.112.052-.167 0 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
