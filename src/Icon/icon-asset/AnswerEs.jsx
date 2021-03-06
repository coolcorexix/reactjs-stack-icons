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
        d="M9.02 6.734c.416 0 .738-.105.966-.314.228-.214.342-.506.342-.878 0-.379-.108-.677-.326-.894-.213-.217-.542-.325-.987-.325h-1.33v2.411H9.02z"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M3 14h11l3 3V3c0-1.09-.91-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.09.91 2 2 2zm4.685-5.925v2.94H6.03V2.983h2.985c.949 0 1.68.212 2.196.635.515.423.772 1.02.772 1.793 0 .548-.12 1.006-.358 1.374-.236.364-.594.654-1.076.871l1.738 3.283v.078H10.51L9.004 8.075H7.685z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
