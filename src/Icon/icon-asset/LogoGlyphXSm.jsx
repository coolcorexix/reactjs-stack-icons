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
      <path fill="#BCBBBB" d="M14 16v-5h2v7H2v-7h2v5h10z"></path>
      <path
        fill="#F48024"
        d="M12.09.723l-1.213.902 4.51 6.062 1.212-.902L12.09.723zM5 15h8v-2H5v2zM14.148 9.132L8.342 4.297l.967-1.161 5.806 4.835-.967 1.161zM6.447 7.657l6.85 3.19.637-1.37-6.85-3.19-.637 1.37zM12.98 12.655l-7.579-1.264.379-1.672 7.417 1.48-.216 1.456z"
      ></path>
    </svg>
  );
}

export default Icon;
