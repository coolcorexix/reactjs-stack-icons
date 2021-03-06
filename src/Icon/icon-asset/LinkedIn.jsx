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
        fill="#1178B3"
        fillRule="evenodd"
        d="M15 1a2 2 0 011.994 1.85L17 3v12a2 2 0 01-1.85 1.994L15 17H3a2 2 0 01-1.995-1.85L1 15V3a2 2 0 011.85-1.995L3 1h12zm-3.213 5.807c-1.083 0-1.83.556-2.182 1.12l-.065.113h-.03V7H7.234v7.635h2.37v-3.778c0-.996.189-1.96 1.424-1.96 1.163 0 1.23 1.042 1.234 1.908v3.83h2.37v-4.191c0-2.057-.445-3.637-2.845-3.637zM5.746 7H3.37v7.635h2.376V7zM4.558 3.203a1.375 1.375 0 10-.002 2.75 1.375 1.375 0 00.002-2.75z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
