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
        d="M9.78 4.897c-.301-.438-.732-.657-1.29-.657-.556 0-.985.217-1.286.651-.302.43-.455 1.063-.458 1.898v.392c0 .82.15 1.457.452 1.909.302.452.736.679 1.302.679.556 0 .982-.217 1.28-.651.298-.438.449-1.074.453-1.91v-.391c0-.843-.151-1.483-.453-1.92z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M3 14h11l3 3V3c0-1.09-.91-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.09.91 2 2 2zm8.49-4.739a3.152 3.152 0 01-1.202 1.38c-.519.323-1.115.485-1.788.485-.666 0-1.26-.16-1.782-.48a3.192 3.192 0 01-1.214-1.368c-.287-.596-.432-1.28-.436-2.053v-.397c0-.791.142-1.486.425-2.086.287-.603.69-1.065 1.208-1.385.523-.323 1.119-.485 1.788-.485.67 0 1.264.162 1.782.485.523.32.925.782 1.209 1.385.287.6.43 1.293.43 2.08v.359c0 .79-.14 1.484-.42 2.08z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
