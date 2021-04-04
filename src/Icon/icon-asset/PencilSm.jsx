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
        d="M11.094 1.71l1.14 1.12c.2.2.2.51 0 .71L11.09 4.704l-1.88-1.84 1.174-1.153c.2-.2.51-.2.71 0zM2 10.12l6.37-6.426 1.877 1.876L3.88 12H2v-1.88z"
      ></path>
    </svg>
  );
}

export default Icon;
