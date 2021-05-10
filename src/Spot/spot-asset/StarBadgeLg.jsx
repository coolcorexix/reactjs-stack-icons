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
      <path
        fill="#000"
        d="M36.016 37.997c0-1.103.894-1.997 1.997-1.997h23.982a6 6 0 016 6.005l-.017 20.034a6 6 0 01-6 5.995H42.016a6 6 0 01-6-6V37.997z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        d="M48.65 1.924c-.21-.645-1.122-.645-1.332 0L45.45 7.672a.7.7 0 01-.666.484h-6.043c-.678 0-.96.868-.412 1.266l4.89 3.553a.7.7 0 01.254.782l-1.867 5.748c-.21.645.528 1.181 1.077.783l4.89-3.553a.7.7 0 01.822 0l4.89 3.553c.548.398 1.286-.138 1.077-.783l-1.868-5.748a.7.7 0 01.255-.782l4.89-3.553c.548-.398.266-1.266-.412-1.266h-6.044a.7.7 0 01-.666-.484l-1.868-5.748z"
      ></path>
      <path
        fill="#000"
        d="M7 14.5A1.5 1.5 0 018.5 13h22a1.5 1.5 0 000-3h-22A4.5 4.5 0 004 14.5v49.25c0 .999.493 1.934 1.317 2.499l39.991 27.41a3.03 3.03 0 003.372.036l41.949-27.43A3.03 3.03 0 0092 63.727V14.5a4.5 4.5 0 00-4.5-4.5H64a1.5 1.5 0 000 3h23.5a1.5 1.5 0 011.5 1.5v49.228a.03.03 0 010 .007l-.001.003a.03.03 0 01-.012.015l-41.95 27.431a.03.03 0 01-.033 0l-39.99-27.41A.03.03 0 017 63.75V14.5z"
      ></path>
    </svg>
  );
}

export default Icon;