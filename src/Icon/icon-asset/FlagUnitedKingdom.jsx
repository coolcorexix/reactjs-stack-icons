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
      <rect
        width={props.width}
        height={props.height}
        x="1"
        y="3"
        fill="#3F51B5"
        rx="2"
      ></rect>
      <path
        fill="#FEFEFE"
        d="M7 5.278L4.082 3H3c-.32 0-.622.075-.89.208L7 7H5.386L1.343 3.88l.014-.02a1.992 1.992 0 00-.297.653L4.31 7H1v1h7V3H7v2.278zM1 11v-1h7v5H7v-3.144l-4.106 3.141a1.991 1.991 0 01-.792-.21L7.008 11H5.372l-4.034 3.113A1.99 1.99 0 011 13v-.326L3.145 11H1zM10 15h1v-2.302L13.95 15H15c.325 0 .632-.078.904-.215L11 11h1.637l4.028 3.109a1.99 1.99 0 00.278-.632L13.706 11H17v-1h-7v5zM11 3v3.15l4.113-3.147c.283.016.55.09.79.212L11 7h1.637l4.028-3.11c.212.318.336.7.336 1.11v.332L14.863 7H17v1h-7V3h1z"
      ></path>
      <path fill="#E53935" d="M10 3H8v5H1v2h7v5h2v-5h7V8h-7V3z"></path>
      <path
        fill="#E53935"
        d="M2.11 3.208a2.01 2.01 0 00-.755.654l-.012.017L5.386 7H7v-.018L2.11 3.208zM1.338 14.113c.192.286.455.519.764.674L7.008 11H5.372l-4.034 3.113zM16.665 14.109c-.19.286-.453.52-.761.676L11 11h1.637l4.028 3.109zM12.636 7l4.028-3.11a2.01 2.01 0 00-.76-.675L10.998 7h1.637z"
      ></path>
    </svg>
  );
}

export default Icon;
