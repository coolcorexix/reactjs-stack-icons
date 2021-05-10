import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 36 36"
    >
      <path
        fill="#000"
        d="M25 35a1 1 0 01-1 1H4.094a1 1 0 01-1-1v-2.86a1 1 0 01.275-.69l9.998-10.513c1.772-1.91 4.143-4.409 4.143-7.21 0-2.525-1.487-4.475-4.12-4.475-2.617 0-4.18 1.508-4.529 3.752-.085.545-.522.996-1.074.996H3.46c-.552 0-1.006-.45-.952-1 .53-5.457 5.399-8.763 10.988-8.763 5.539 0 10.338 2.902 10.338 8.888 0 4.08-2.78 7.511-5.41 10.352l-7.217 7.51H24a1 1 0 011 1V35zm3.87-2.292c0-1.997 1.621-3.335 3.555-3.335 1.927 0 3.575 1.336 3.575 3.335C36 34.722 34.353 36 32.425 36c-1.92 0-3.555-1.292-3.555-3.292z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M2.054 11h4.335c.157-1.2.602-2.312 1.362-3.19.982-1.136 2.418-1.795 4.177-1.795 1.583 0 2.896.596 3.802 1.633.89 1.021 1.319 2.39 1.319 3.842 0 1.683-.71 3.204-1.577 4.496-.828 1.234-1.864 2.35-2.716 3.268l-.111.12L3 30.123V33h19v-3.013H10.114a1 1 0 01-.749-1.663l6.85-7.747.015-.017c2.649-2.861 5.145-6.028 5.145-9.672 0-2.693-1.065-4.62-2.707-5.9C16.995 3.685 14.645 3 12.036 3c-5.163 0-9.458 3.188-9.982 8zM0 12C0 5.265 5.704 1 12.036 1c2.93 0 5.75.766 7.86 2.41 2.143 1.668 3.479 4.185 3.479 7.478 0 4.511-3.061 8.204-5.669 11.022l-5.373 6.077H23a1 1 0 011 1V34a1 1 0 01-1 1H2a1 1 0 01-1-1v-4.26a1 1 0 01.256-.668l9.906-11.04.01-.012.086-.093c.876-.943 1.816-1.956 2.554-3.055.761-1.136 1.237-2.264 1.237-3.382 0-1.073-.316-1.942-.826-2.527-.497-.569-1.244-.948-2.295-.948-1.227 0-2.093.442-2.665 1.104-.587.679-.937 1.676-.937 2.881a1 1 0 01-1 1H1a1 1 0 01-1-1zm31.425 16.373c-1.481 0-2.557.984-2.557 2.334 0 1.335 1.069 2.293 2.557 2.293C32.93 33 34 32.048 34 30.707c0-1.344-1.092-2.334-2.575-2.334zm-4.557 2.334c0-2.643 2.17-4.334 4.557-4.334 2.372 0 4.575 1.68 4.575 4.334C36 33.395 33.776 35 31.425 35c-2.352 0-4.557-1.627-4.557-4.293z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;