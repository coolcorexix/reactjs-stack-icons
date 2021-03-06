import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M13 13l-3-3H3a2 2 0 01-2-2V3a2 2 0 012-2h8a2 2 0 012 2v10zM7.312 1.72a.3.3 0 00-.562 0l-.772 2.065a.3.3 0 01-.268.194l-2.202.097a.3.3 0 00-.173.534L5.06 5.982a.3.3 0 01.102.315l-.589 2.124a.3.3 0 00.455.33l1.838-1.216a.3.3 0 01.33 0L9.036 8.75a.3.3 0 00.454-.33l-.588-2.124a.3.3 0 01.102-.315l1.725-1.372a.3.3 0 00-.174-.534l-2.202-.097a.3.3 0 01-.268-.194L7.312 1.72z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
