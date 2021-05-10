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
      <g fill="#000" opacity="0.2">
        <path d="M38.408 39a1 1 0 00.901-1.434l-7.232-15.01a1 1 0 00-1.726-.13l-5.343 7.8a1 1 0 01-1.361.28l-4.774-3.037a1 1 0 00-1.3.198L9.39 37.355A1 1 0 0010.154 39h28.254zM18 19a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </g>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M1 12a2 2 0 012-2h38a2 2 0 012 2v29a2 2 0 01-2 2H3a2 2 0 01-2-2V12zm2 0v29h38V12H3z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M3 7a1 1 0 011-1h41a2 2 0 012 2v32a1 1 0 11-2 0V8H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M26.526 19.86c.869-1.268 2.785-1.123 3.452.262l7.232 15.01A2 2 0 0135.408 38H7.154c-1.702 0-2.626-1.99-1.528-3.29l8.182-9.688a2 2 0 012.602-.397l4.773 3.037 5.343-7.802zm1.65 1.13l-5.343 7.802a2 2 0 01-2.723.557l-4.774-3.036L7.154 36h28.254l-7.232-15.01zM13 16a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
