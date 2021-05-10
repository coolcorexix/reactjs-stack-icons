import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 96 96"
    >
      <g fill="#000" opacity="0.2">
        <path d="M86 26.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM34 51.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM19 91.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM72.5 60a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path>
      </g>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M75 17a8 8 0 116.486 7.857l-13.445 25.93a8 8 0 11-12.891 4.664l-17.007-9.845a8 8 0 01-8.553 4.27l-9.378 25.321a8 8 0 11-2.802-1.073l9.378-25.321a8 8 0 1112.188-6.181l17.312 10.023A7.993 7.993 0 0163 49c.836 0 1.641.128 2.399.366l13.288-25.627A7.994 7.994 0 0175 17zm8-5a5 5 0 100 10 5 5 0 000-10zM31 37a5 5 0 100 10 5 5 0 000-10zM16 77a5 5 0 100 10 5 5 0 000-10zm42-20a5 5 0 1010 0 5 5 0 00-10 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
