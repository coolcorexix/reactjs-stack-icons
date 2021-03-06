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
      <path fill="#9EA3A9" d="M13 15v-3h1v4H3v-4h1v3h9z"></path>
      <path
        fill="#F27009"
        d="M10.021 2.733l.911-.669 4.01 5.497-.802.619-4.119-5.447zM13.034 9.378l-5.2-4.208.779-.85 5.14 4.272-.719.786zM6.118 8.094l6.188 2.747.454-.942-6.074-2.887-.568 1.082zM12.02 12.372L5.345 11.1l.22-1.114 6.602 1.425-.147.96z"
      ></path>
      <path
        fill="#F27009"
        fillRule="evenodd"
        d="M5 14h7v-1H5v1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
