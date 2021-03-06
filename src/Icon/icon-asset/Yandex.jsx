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
        fill="red"
        fillRule="evenodd"
        d="M11.26 2.48h-.917c-1.387 0-2.73.917-2.73 3.58 0 2.573 1.23 3.4 2.73 3.4h.918V2.48zm-1.432 8.413l-2.73 6.13h-1.99l2.998-6.555c-1.41-.716-2.35-2.014-2.35-4.408 0-3.357 2.126-5.035 4.654-5.035h2.573v15.999H11.26v-6.131H9.829z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
