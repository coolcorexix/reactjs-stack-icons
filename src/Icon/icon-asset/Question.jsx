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
        d="M4 14l-3 3V3c0-1.1.9-2 2-2h12a2 2 0 012 2v9a2 2 0 01-2 2H4zm7.75-3.97c.32-.37.55-.75.7-1.15.18-.51.28-1.11.28-1.79 0-1.29-.35-2.29-1.03-3a3.66 3.66 0 00-2.78-1.07 3.7 3.7 0 00-2.8 1.07 4.15 4.15 0 00-1.03 3c0 1.29.35 2.29 1.03 3a3.759 3.759 0 002.85 1.07c.62 0 1.2-.11 1.71-.34.65.44 1 .68 1.06.7.23.13.46.23.7.3l.59-1.13a5.202 5.202 0 01-1.28-.66zm-1.27-.9a5.4 5.4 0 00-1.5-.8l-.45.9c.33.12.66.29.98.5-.2.07-.42.11-.65.11-.61 0-1.12-.23-1.52-.68-.4-.46-.6-1.15-.6-2.07 0-.9.2-1.58.6-2.04a2 2 0 011.57-.67 2 2 0 011.58.67c.4.45.6 1.13.6 2.04 0 .44-.05.83-.16 1.17-.1.34-.25.63-.45.87z"
      ></path>
    </svg>
  );
}

export default Icon;