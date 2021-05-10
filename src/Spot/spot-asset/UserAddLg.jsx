import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 96 96"
    >
      <path
        fill="#000"
        d="M55.987 46.712c7.061-2.852 12.043-9.77 12.043-17.853 0-10.63-8.617-19.247-19.247-19.247-10.63 0-19.246 8.617-19.246 19.247 0 7.96 4.833 14.793 11.726 17.722-21.916 2.95-21.916 21.44-21.916 43.19h59.44c0-22.038 0-39.781-22.8-43.059z"
        opacity="0.2"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M53.868 43.542C60.492 40.009 65 33.032 65 25c0-11.598-9.402-21-21-21s-21 9.402-21 21c0 7.9 4.362 14.78 10.809 18.366-2.833.562-5.306 1.41-7.461 2.526-4.504 2.334-7.51 5.786-9.491 10.012-1.965 4.19-2.916 9.119-3.387 14.441C13 75.656 13 81.471 13 87.458V89h42.5a1.5 1.5 0 100-3H16c.003-5.478.04-10.654.459-15.39.457-5.169 1.364-9.7 3.114-13.432 1.733-3.697 4.3-6.625 8.155-8.622 3.104-1.609 7.112-2.647 12.309-2.93a21.137 21.137 0 007.465.083c8.181.597 13.538 2.811 17.106 6.094 4.032 3.71 6.023 9.009 6.977 15.655a1.5 1.5 0 002.97-.427c-.999-6.954-3.152-13.052-7.916-17.436-3.138-2.887-7.303-4.934-12.771-6.053zM44 7c9.941 0 18 8.059 18 18 0 8.8-6.315 16.125-14.661 17.69a65.213 65.213 0 00-7.077-.079C32.115 40.891 26 33.66 26 25c0-9.941 8.059-18 18-18z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        d="M72 75.5a1.5 1.5 0 00-3 0v6.513h-6.5a1.5 1.5 0 000 3H69V91.5a1.5 1.5 0 003 0v-6.487h6.5a1.5 1.5 0 100-3H72V75.5z"
      ></path>
    </svg>
  );
}

export default Icon;