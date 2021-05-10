import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        fill="#000"
        d="M30.869 42c.337 0 .673.314.673.629v2.108c0 1.257-.875 2.263-1.885 2.263h-5.771C22.876 47 22 45.994 22 44.737V42.63c0-.315.337-.629.673-.629h8.196z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        d="M27.21 7.022a1 1 0 00-.42 1.956C28.865 9.422 33 11.65 33 17a1 1 0 002 0c0-6.651-5.198-9.422-7.79-9.978z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M19 40.866c-1.535-.425-2.683-1.817-2.683-3.485v-.72c0-2.288-1.107-4.431-2.956-5.895-4.394-3.478-6.953-8.984-6.244-15.044v-.003c.926-7.683 7.245-13.722 14.954-14.625l.015-.001C32.332.053 41 7.895 41 17.737c0 5.37-2.56 10.109-6.527 13.168l-.006.004c-1.797 1.366-2.807 3.548-2.807 5.883v.589c0 1.66-1.136 3.046-2.66 3.479V43c0 1.547-1.15 3-2.75 3h-4.5c-1.6 0-2.75-1.453-2.75-3v-2.134zm-9.896-24.91c-.624 5.333 1.62 10.171 5.498 13.242 2.287 1.81 3.715 4.512 3.715 7.463v.72c0 .87.735 1.619 1.669 1.619h8.005c.933 0 1.669-.748 1.669-1.62V37H22a1 1 0 110-2h7.822c.409-2.23 1.582-4.274 3.432-5.681C36.758 26.615 39 22.449 39 17.737c0-8.62-7.606-15.575-16.704-14.655-6.83.803-12.383 6.155-13.192 12.874zM21 41v2c0 .675.474 1 .75 1h4.5c.276 0 .75-.325.75-1v-2h-6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;