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
        d="M9.133 6.844c.437 0 .77-.103.998-.309.232-.206.348-.5.348-.882 0-.394-.116-.712-.348-.955-.232-.243-.552-.368-.96-.375H7.654v2.521h1.479z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M1 17l3-3h11c1.09 0 2-.91 2-2V3c0-1.09-.91-2-2-2H3c-1.1 0-2 .9-2 2v14zm6.654-5.984H5.999V2.982h3.134c.603 0 1.133.11 1.589.331.46.22.813.535 1.059.944.246.404.37.866.37 1.385 0 .787-.27 1.408-.811 1.864-.537.453-1.282.68-2.235.68H7.654v2.83z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
