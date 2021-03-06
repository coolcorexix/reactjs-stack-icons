import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M29 4H7v2H3a1 1 0 00-1 1v6a5 5 0 005 5 8 8 0 008 8h1v3h-3c-1.657 0-4 1.343-4 3v1h18v-1c0-1.657-2.343-3-4-3h-3v-3h1a8 8 0 008-8 5 5 0 005-5V7a1 1 0 00-1-1h-4V4zm3 9a3 3 0 01-3 3V8h3v5zM7 16a3 3 0 01-3-3V8h3v8zm11.38-8.33l1.326 4.082a.4.4 0 00.38.276h4.291a.4.4 0 01.236.723l-3.472 2.522a.4.4 0 00-.145.448l1.326 4.08a.4.4 0 01-.616.448l-3.47-2.522a.4.4 0 00-.471 0l-3.471 2.521a.4.4 0 01-.616-.447l1.326-4.08a.4.4 0 00-.145-.448l-3.471-2.521a.4.4 0 01.235-.724h4.29a.4.4 0 00.38-.277l1.327-4.08a.4.4 0 01.76 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
