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
        d="M4 5.97c-.57-.11-1-.62-1-1.22v-1.5C3 2.56 3.56 2 4.25 2h1.5C6.44 2 7 2.56 7 3.25V4l3-3v2h1c.78.03 1.46.35 2.06.94.6.59.9 1.28.94 2.06v6.02c.57.12 1 .62 1 1.23v1.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25v-1.5c0-.6.43-1.1 1-1.22V6a.942.942 0 00-.31-.69c-.21-.2-.42-.29-.7-.31h-1v2L7 4v.75c0 .6-.43 1.1-1 1.22v6.06c.57.11 1 .62 1 1.22v1.5C7 15.44 6.44 16 5.75 16h-1.5C3.56 16 3 15.44 3 14.75v-1.5c0-.6.43-1.1 1-1.22V5.97zM6 5V3H4v2h2zm-2 8v2h2v-2H4zm8 0v2h2v-2h-2z"
      ></path>
    </svg>
  );
}

export default Icon;
