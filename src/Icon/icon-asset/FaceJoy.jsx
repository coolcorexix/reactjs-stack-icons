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
      <circle cx="9" cy="9" r="8" fill="#FFAA3B" opacity="0.4"></circle>
      <path
        fill="#FF9700"
        d="M8.41 17a10 10 0 01.38-15.75c.1-.075.194-.159.28-.25a8 8 0 00-5.73 13.66A7.93 7.93 0 008.41 17z"
        opacity="0.3"
      ></path>
      <path
        fill="#1A1104"
        d="M7.35 8A.71.71 0 008 7.28v-.9C8 5.5 7.35 4.6 6.48 4.6 5.562 4.6 5 5.5 5 6.39v.89a.71.71 0 00.65.72h1.7zM12.42 10a30.447 30.447 0 01-6.82 0c-.831-.096-1.45.802-1.09 1.55C5.422 13.126 7.117 14 9 14c1.922 0 3.606-.87 4.52-2.46.358-.749-.273-1.64-1.1-1.54zM12.35 8h-1.7a.71.71 0 01-.65-.72v-.89c0-.89.578-1.79 1.48-1.79.87 0 1.52.9 1.52 1.78v.9a.71.71 0 01-.65.72z"
      ></path>
    </svg>
  );
}

export default Icon;
