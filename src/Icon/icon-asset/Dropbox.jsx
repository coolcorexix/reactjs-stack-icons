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
        fill="#0061FF"
        d="M4.547 1.769L.095 4.605l4.452 2.837L9 4.606l4.453 2.836 4.452-2.837-4.452-2.836L9 4.606 4.547 1.769zM4.547 13.115L.095 10.28l4.452-2.837L9 10.279l4.453-2.837 4.452 2.837-4.452 2.836L9 10.28l-4.453 2.836z"
      ></path>
      <path
        fill="#0061FF"
        d="M9 16.898L4.548 14.06l4.454-2.836 4.452 2.836-4.452 2.837z"
      ></path>
    </svg>
  );
}

export default Icon;
