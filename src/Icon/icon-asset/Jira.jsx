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
        fill="#2684FF"
        d="M16.36 1H8.775a3.422 3.422 0 003.422 3.422h1.398v1.35a3.423 3.423 0 003.413 3.42V1.66A.657.657 0 0016.36 1z"
      ></path>
      <path
        fill="url(#paint0_linear)"
        d="M12.326 5.004H4.74a3.422 3.422 0 003.422 3.423H9.56v1.35a3.424 3.424 0 003.423 3.422V5.661a.657.657 0 00-.657-.657z"
      ></path>
      <path
        fill="url(#paint1_linear)"
        d="M8.36 9H.765a3.424 3.424 0 003.433 3.423h1.397v1.35a3.422 3.422 0 003.423 3.422V9.66a.66.66 0 00-.66-.66z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="12.823"
          x2="9.596"
          y1="5.018"
          y2="8.343"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC"></stop>
          <stop offset="1" stopColor="#2684FF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="346.649"
          x2="210.843"
          y1="327.029"
          y2="460.172"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC"></stop>
          <stop offset="1" stopColor="#2684FF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Icon;
