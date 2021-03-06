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
        d="M13.62 10.08L12.1 4.66h-.06l-1.5 5.42h3.08zM5.7 11.13L4.53 7.02h-.08l-1.13 4.11H5.7zM17.31 15h-2.25l-.95-3.25h-4.07L9.09 15H6.84l-.69-2.33H2.87L2.17 15H0l3.3-9.59h2.5l2.17 6.34L10.86 3h2.52l3.94 12h-.01z"
      ></path>
    </svg>
  );
}

export default Icon;
