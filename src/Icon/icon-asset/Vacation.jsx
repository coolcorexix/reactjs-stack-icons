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
        fill="#9199A1"
        fillRule="evenodd"
        d="M11.556 10.129l-1.43 1.43 5.443 5.44 1.427-1.427-5.44-5.443z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F7AA6D"
        fillRule="evenodd"
        d="M16.266 3.634L13.74 6.158c-2.763-2.763-6.63-3.69-10.098-2.542C7.129.138 12.779.147 16.266 3.634zm-12.65.009C.138 7.129.147 12.779 3.634 16.266l2.524-2.525c-2.763-2.763-3.69-6.63-2.542-10.098z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#F48024"
        d="M3.625 3.634l.009-.009c2.657-.335 6.082 1.033 8.845 3.796L7.42 12.479C4.658 9.707 3.29 6.29 3.625 3.634z"
      ></path>
    </svg>
  );
}

export default Icon;
