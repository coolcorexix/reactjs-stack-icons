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
        d="M39 74.262v-39.57a1 1 0 011.482-.876l33.42 18.398c1.363.75 1.386 2.7.041 3.481l-33.44 19.432A1 1 0 0139 74.262z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M36.866 27.525c-1.724-.916-3.803.333-3.803 2.286v38.33c0 1.978 2.13 3.225 3.854 2.257l35.08-19.683c1.785-1.002 1.755-3.582-.052-4.543l-35.08-18.647zm-.803 39.913V30.496L69.87 48.468l-33.808 18.97z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M48 2C22.595 2 2 22.595 2 48s20.595 46 46 46 46-20.595 46-46S73.405 2 48 2zM5 48C5 24.252 24.252 5 48 5s43 19.252 43 43-19.252 43-43 43S5 71.748 5 48z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
