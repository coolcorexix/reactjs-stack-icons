import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 19 22"
    >
      <path fill="#C1BEBC" d="M16 20v-6h2v8H0v-8h2v6h14z"></path>
      <path
        fill="#F48024"
        fillRule="evenodd"
        d="M12.724 0l-1.575 1.171 5.857 7.875 1.575-1.171L12.724 0zM4 18h10v-2H4v2zm11.397-7.076L7.856 4.643l1.256-1.509 7.542 6.281-1.257 1.509zM5.394 9.008l8.897 4.143.828-1.78-8.897-4.143-.828 1.78zm8.636 6.269l-9.907-1.67.404-1.922 9.634 1.922-.13 1.67z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
