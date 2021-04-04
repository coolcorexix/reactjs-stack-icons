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
        fill="#FFC166"
        d="M14.144 7.859a5.768 5.768 0 00-1.38 1.096c-.27.251-.353.708-.67.483-.261-.186-.351-1.208-.289-1.85.063-.642.197-2.448.223-3.065.025-.617.38-2.113-.71-2.261-1.088-.148-1.234 1.635-1.365 2.503-.13.867-.492 2.534-.492 2.534a.787.787 0 00-.809-.439C8.091 6.941 8 7.436 8 7.898a.737.737 0 00-.736-.656.777.777 0 00-.775.656L5.093 4.765c-.384-1.152-2.088-.245-1.573.883.49 1.179.89 2.394 1.196 3.633.183.917.222 1.535.377 2.452.223.713.411 1.71.907 2.267h5a10.357 10.357 0 001.947-2.267c.598-.904 1.32-1.758 1.883-2.668.451-.73.313-1.677-.686-1.206z"
      ></path>
      <path
        fill="#07C"
        d="M6 15.77V15h5v.77a1.235 1.235 0 01-1.214 1.232H7.214A1.235 1.235 0 016 15.771z"
        opacity="0.7"
      ></path>
      <g fill="#000" opacity="0.4">
        <path d="M7.5 0a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5zM0 8.5A.5.5 0 01.5 8h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM16.5 8a.5.5 0 000 1h1a.5.5 0 000-1h-1zM1.146 2.146a.5.5 0 01.708 0l1 1a.5.5 0 11-.708.708l-1-1a.5.5 0 010-.708zM14.854 2.854a.5.5 0 00-.708-.708l-1 1a.5.5 0 00.708.708l1-1z"></path>
      </g>
    </svg>
  );
}

export default Icon;
